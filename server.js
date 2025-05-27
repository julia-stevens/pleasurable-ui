// Import
import express from "express";
import { Liquid } from "liquidjs";
import methodOverride from "method-override"; // Importeer de "method-override" module, die het mogelijk maakt om HTTP-methoden te gebruiken

// Express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Method Override
app.use(methodOverride("_method"));

// Liquid
const engine = new Liquid();
app.engine("liquid", engine.express());

// Views
app.set("views", "./views");

// API links
const directusApiBaseUrl = "https://fdnd-agency.directus.app/items";
const webinarsEndpoint = `${directusApiBaseUrl}/avl_webinars`;
const speakersEndpoint = `${directusApiBaseUrl}/avl_speakers`;
const contouringsEndpoint = `${directusApiBaseUrl}/avl_contourings`;

const commentsEndpoint = `${directusApiBaseUrl}/avl_comments`;
const usersEndpoint = `${directusApiBaseUrl}/avl_users`;
const categoriesEndpoint = `${directusApiBaseUrl}/avl_categories`;
const messagesEndpoint = `${directusApiBaseUrl}/avl_messages`;
const teamEndpoint = `${directusApiBaseUrl}/avl_team`;
const partnerLogosEndpoint = `${directusApiBaseUrl}/avl_logos`;
const contentEndpoint = `${directusApiBaseUrl}/avl_content`;

const slugFilter = "?filter[slug][_eq]=";
const bookmarkFilter = "?filter[for][_eq]=Bookmark webinar"

// Routes
// Home
app.get("/", async function (req, res) {
  // req + res plss T-T
  const contentResponse = await fetch(contentEndpoint)
  const { data: homeContent } = await contentResponse.json();

  // Filter de content op gewenste keys
  const wantedKeys = ["home-intro", "home-meet-our-doctors", "home-partners", "home-webinars", "home-contourings"];
  const filteredContent = homeContent.filter(item => wantedKeys.includes(item.key));

  res.render("index.liquid", {  homeContent: filteredContent });
});

// webinars
app.get("/webinars", async (req, res) => {
  const categoryFilter = req.query.category || "";
  const sortOption = req.query.sort || "new-old";
  const filtersActive = categoryFilter !== "" || sortOption !== "new-old";

  // Webinars ophalen
  const webinarsDetailResponse = await fetch(
    `${webinarsEndpoint}?fields=*,speakers.*.*,resources.*.*,categories.*.*`
  );
  const { data: webinars } = await webinarsDetailResponse.json();

  // Categorieën ophalen
  const categoriesResponse = await fetch(`${categoriesEndpoint}`);
  const { data: categories } = await categoriesResponse.json();

  // Bookmarks ophalen
  const bookmarkResponse = await fetch(`${messagesEndpoint}${bookmarkFilter}`);
  const bookmarkResponseJSON = await bookmarkResponse.json();

  // Zet bookmarks om naar array van webinar-ids (strings)
  const bookmarkIds = new Set(
    bookmarkResponseJSON.data.map((item) => String(item.text))
  );
  const bookmarkArray = Array.from(bookmarkIds);

  let filteredWebinars = webinars;

  if (categoryFilter) {
    filteredWebinars = filteredWebinars.filter((webinar) =>
      webinar.categories.some(
        (cat) => cat.avl_categories_id.name === categoryFilter
      )
    );
  }

  filteredWebinars.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOption === "new-old" ? dateB - dateA : dateA - dateB;
  });

  res.render("webinars.liquid", {
    webinars: filteredWebinars,
    categories,
    selectedCategory: categoryFilter,
    selectedSort: sortOption,
    filtersActive,
    bookmarkIds: bookmarkArray
  });
});

// Webinars detail
app.get("/webinars/:slug", async (req, res) => {
  const slug = req.params.slug;

  const webinarDetailResponse = await fetch(`${webinarsEndpoint}${slugFilter}${slug}&fields=*,speakers.*.*,resources.*.*,categories.*.*`);
  const { data: webinarDetailResponseJSON } = await webinarDetailResponse.json();

  const categoriesDetailResponse = await fetch(`${categoriesEndpoint}`);
  const { data: categoriesDetailResponseJSON } = await categoriesDetailResponse.json();

  const commentsDetailResponse = await fetch(`${commentsEndpoint}`);
  const { data: commentsDetailResponseJSON } = await commentsDetailResponse.json();

  res.render("webinars-detail.liquid", {
    webinars: webinarDetailResponseJSON,
    categories: categoriesDetailResponseJSON,
    comments: commentsDetailResponseJSON,
  });
});

// Contourings
app.get("/contourings", async (req, res) => {
  const contouringsResponse = await fetch(contouringsEndpoint);
  const { data: contouringsResponseJSON } = await contouringsResponse.json(); // fetch and json can be a helper function

  res.render("contourings.liquid", {
    contourings: contouringsResponseJSON,
  });
});

// Contourings detail
app.get("/contourings/:slug", async (req, res) => {
  const slug = req.params.slug;
  const contouringsDetailResponse = await fetch(
    `${contouringsEndpoint}${slugFilter}${slug}`
  );
  const { data: contouringsDetailResponseJSON } =
    await contouringsDetailResponse.json();

  res.render("contourings-detail.liquid", {
    contourings: contouringsDetailResponseJSON,
  });
});

// Speakers
app.get("/speakers", async (req, res) => {
  try {
    const filter = req.query.filter || "all"; // default to 'all'

    // Haal alle speakers op uit API
    const speakersResponse = await fetch(speakersEndpoint);
    const speakersJSON = await speakersResponse.json();

    const speakers = speakersJSON.data.map(speaker => ({
      ...speaker,
      id: String(speaker.id)
    }));

    // Haal alle bookmarks op (gepost-te speakers)
    const bookmarksResponse = await fetch(`${messagesEndpoint}`);
    const bookmarksJSON = await bookmarksResponse.json();

    const bookmarkedSpeakerIds = bookmarksJSON.data
      .filter(bookmark => bookmark.for && bookmark.for.startsWith("Bookmark for Julia"))
      .map(bookmark => String(bookmark.text))
      .filter(bookmarkedId => speakers.some(speaker => speaker.id === bookmarkedId));

    let filteredSpeakers = speakers;
    if (filter === "bookmarked") {
      filteredSpeakers = speakers.filter(speaker => bookmarkedSpeakerIds.includes(speaker.id));
    }

    // Render speaker en bookmarks naar 'speakers' view
    res.render("speakers.liquid", {
      speakers: filteredSpeakers,
      bookmarkedIds: bookmarkedSpeakerIds,
      currentFilter: filter
    });
  } catch (error) {
    console.error("Error loading speakers:", error);
    res.status(500).send("Error loading speakers.");
  }
});

app.post("/speakers", async (req, res) => {
  // Haal waarden het formulier
  const { textField, forField, _method } = req.body;
  const speakerId = String(textField); // zet id om naar string
  const userBookmarkLabel = forField;

  try {
    // Haal bestaande bookmarks op
    const bookmarksResponse = await fetch(`${messagesEndpoint}`);
    const bookmarksJSON = await bookmarksResponse.json();
    const bookmarks = bookmarksJSON.data;

    if (_method === "DELETE") {
      // Zoek naar match op id & for (Bookmark for Julia)
      let bookmarkToDelete = bookmarks.find(
        bookmark => String(bookmark.text) === speakerId && bookmark.for === userBookmarkLabel
      );
      
      // Als match gevonden, verwijder de bookmark 
      if (bookmarkToDelete) {
        await fetch(`${messagesEndpoint}/${bookmarkToDelete.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json;charset=UTF-8" }
        });
      } 
    } else {

      // Check of de bookmark al bestaat (check op id en for (Bookmark for Julia))
      const alreadyBookmarked = bookmarks.find(
        bookmark => String(bookmark.text) === speakerId && bookmark.for === userBookmarkLabel
      );

      // Als bookmark nog niet bestaat, POST deze dan
      if (!alreadyBookmarked) {
        await fetch(`${messagesEndpoint}`, {
          method: "POST",
          headers: { "Content-Type": "application/json;charset=UTF-8" },
          body: JSON.stringify({
            text: speakerId,
            for: userBookmarkLabel
          })
        });
      } 
    }
    
    // Redirect naar vorige pagina of naar "/speakers"
    res.redirect(303, req.get("Referer") || "/speakers");

  } catch (error) {
    console.error("Error handling speaker bookmark:", error);
    res.status(500).send("Something went wrong.");
  }
});

app.post("/speakers/:id/unbookmark", async (req, res) => {
  const speakerId = req.params.id;
  const redirectFilter = req.body.filter || "all";

  try {
    // Verwijder bookmark
    await fetch(`${messagesEndpoint}/${speakerId}`, {
      method: "DELETE"
    });

    // Redirect naar filter pagina
    res.redirect(`/speakers?filter=${redirectFilter}`);
  } catch (error) {
    console.error("Error unbookmarking speaker:", error);
    res.status(500).send("Failed to unbookmark speaker.");
  }
});

// Speakers detail
app.get("/speakers/:slug", async (req, res) => {
  const slug = req.params.slug;
  const speakersDetailResponse = await fetch(
    `${speakersEndpoint}${slugFilter}${slug}&fields=*,webinars.*.*`
  );
  const { data: speakersDetailResponseJSON } =
    await speakersDetailResponse.json();

  res.render("speakers-detail.liquid", {
    speakers: speakersDetailResponseJSON,
  });
});

// About us
app.get("/about-us", async (req, res) => {

  const teamResponse = await fetch(teamEndpoint + "?fields=role,name,photo")
  const { data: teams } = await teamResponse.json();

  const logoResponse = await fetch(partnerLogosEndpoint)
  const { data: partnerLogos } = await logoResponse.json();

  const contentResponse = await fetch(contentEndpoint)
  const { data: aboutUsContent } = await contentResponse.json();

  // Filter de content op gewenste keys
  const wantedKeys = ["about-us-top", "about-us-bottom"];
  const filteredContent = aboutUsContent.filter(item => wantedKeys.includes(item.key));

  res.render("about-us.liquid", { teams, partnerLogos, aboutUsContent: filteredContent });
});

// POST voor url /webinars
app.post("/webinars", async function (req, res) {
  // Haal de textField (webinar.id) en forField uit de request body
  const { textField, forField } = req.body;

  try {
    // Haal de bookmarks op
    const bookmarkResponse = await fetch(`${messagesEndpoint}`)
    const bookmarkResponseJSON = await bookmarkResponse.json()

    // Zoek in de bookmarks of het item al bestaat door te controleren op textField (webinar.id)
    const existingItem = bookmarkResponseJSON.data.find(item => item.text === textField);

    if (existingItem) {
      // Als het item al bestaat in de bookmarks, verwijder het dan
      await fetch(`${messagesEndpoint}/${existingItem.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Verwijderd uit bookmarks webinars: ${textField}`);
    } else {
      // Voeg het item toe als het niet bestaat
      await fetch(`${messagesEndpoint}`, {
        method: "POST",
        body: JSON.stringify({
          text: textField,
          for: forField
        }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Toegevoegd aan bookmarks webinar: ${textField}`);
    }

    // Stuur de gebruiker terug naar de bookmarks pagina
    res.redirect(303, "/webinars");
  } catch (error) {
    console.error("Fout bij toggle van de bookmarks webinar:", error);
    res.status(500).send("Er is een fout opgetreden.");
  }
});

// // 404 pagina als je de route niet werkt
 app.use((req, res) => {
   res.status(404).render("404.liquid", { })
 })

// Port
app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function () {
  console.log(`http://localhost:${app.get("port")}`);
});