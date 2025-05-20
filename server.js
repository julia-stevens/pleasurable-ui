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
  res.render("index.liquid");
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
  const speakersResponse = await fetch(speakersEndpoint);
  const { data: speakersResponseJSON } = await speakersResponse.json();

  res.render("speakers.liquid", {
    speakers: speakersResponseJSON,
  });
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

console.log(aboutUsContent)

res.render("about-us.liquid", { teams, partnerLogos, aboutUsContent });
});

// Profile
app.get("/profile", async (req, res) => {
  res.render("profile.liquid");
});

// Profile bookmarks
app.get("/profile/bookmarks", async (req, res) => {
  res.render("profile-bookmarks.liquid");
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

// Port
app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function () {
  console.log(`http://localhost:${app.get("port")}`);
});
