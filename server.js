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

const slugFilter = "?filter[slug][_eq]=";

// Routes
// Home
app.get("/", async function (req, res) {
  // req + res plss T-T
  res.render("index.liquid");
});

// webinars

app.get("/webinars", async (req, res) => {
  const webinarsDetailResponse = await fetch(
    `${webinarsEndpoint}?fields=*,speakers.*.*,resources.*.*,categories.*.*`
  );
  const { data: webinarsDetailResponseJson } =
    await webinarsDetailResponse.json();

  res.render("webinars.liquid", { webinars: webinarsDetailResponseJson });
});

// Webinars detail
app.get("/webinars/:slug", async (req, res) => {
  const slug = req.params.slug;
  const webinarDetailResponse = await fetch(
    `${webinarsEndpoint}${slugFilter}${slug}`
  );
  const { data: webinarDetailResponseJSON } =
    await webinarDetailResponse.json();

  res.render("webinars-detail.liquid", {
    webinars: webinarDetailResponseJSON,
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

app.get("/speakers", async (req, res) => {
  try {
    // Fetch speakers
    const speakersResponse = await fetch(speakersEndpoint);
    const speakersData = await speakersResponse.json();
    
    // Fetch bookmarks (messages) — filter for Julia or globally if needed
    const bookmarksResponse = await fetch(`${messagesEndpoint}`);
    const bookmarksData = await bookmarksResponse.json();
    
    // Create list of bookmarked speaker IDs (as strings)
    // Filter to only include bookmarks that have format "Bookmark for X"
    const bookmarkedSpeakerIds = bookmarksData.data
      .filter(bookmark => bookmark.for && bookmark.for.startsWith("Bookmark for"))
      .map(bookmark => String(bookmark.text));
    
    // Validate bookmarked IDs against actual speakers to prevent "stuck" bookmarks
    const validSpeakerIds = speakersData.data.map(speaker => String(speaker.id));
    const validBookmarkedIds = bookmarkedSpeakerIds.filter(id => 
      validSpeakerIds.includes(id)
    );
    
    // Convert speaker IDs to string to match bookmarks
    const speakersWithStringIds = speakersData.data.map(speaker => ({
      ...speaker,
      id: String(speaker.id)
    }));
    
    // Render the page with speakers and bookmarked IDs
    res.render("speakers.liquid", {
      speakers: speakersWithStringIds,
      bookmarkedIds: validBookmarkedIds // Only pass valid bookmarks
    });
  } catch (error) {
    console.error("Error loading speakers:", error);
    res.status(500).send("Error loading speakers.");
  }
});

app.post("/speakers", async (req, res) => {
  const { textField, forField, _method } = req.body;
  console.log("Incoming method:", _method, "Speaker ID:", textField, "For:", forField);
  
  try {
    if (_method === "DELETE") {
      // Get all current speaker bookmarks
      const bookmarksResponse = await fetch(`${messagesEndpoint}`);
      const bookmarksData = await bookmarksResponse.json();
      
      // Look for exact matches - both speaker ID and for field
      const bookmarkToDelete = bookmarksData.data.find(
        bookmark => String(bookmark.text) === String(textField) && 
                   bookmark.for === forField
      );
      
      // If no exact match is found, try a more flexible approach
      if (!bookmarkToDelete) {
        // Look for any bookmark with this user that matches the speaker ID
        const alternativeBookmark = bookmarksData.data.find(
          bookmark => String(bookmark.text) === String(textField) && 
                     bookmark.for && bookmark.for.includes(forField.split(" ").pop())
        );
        
        if (alternativeBookmark) {
          console.log("Found alternative bookmark to delete:", alternativeBookmark);
          await fetch(`${messagesEndpoint}/${alternativeBookmark.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            }
          });
        } else {
          console.log("No matching bookmark found to delete");
        }
      } else {
        console.log("Deleting bookmark:", bookmarkToDelete);
        await fetch(`${messagesEndpoint}/${bookmarkToDelete.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        });
      }
    } else {
      // Before adding a new bookmark, check if one already exists (to prevent duplicates)
      const existingBookmarksResponse = await fetch(`${messagesEndpoint}`);
      const existingBookmarksData = await existingBookmarksResponse.json();
      
      const existingBookmark = existingBookmarksData.data.find(
        bookmark => String(bookmark.text) === String(textField) && 
                   bookmark.for === forField
      );
      
      if (!existingBookmark) {
        // Add a new speaker bookmark
        await fetch(`${messagesEndpoint}`, {
          method: "POST",
          body: JSON.stringify({
            text: textField, // this is speaker ID
            for: forField    // this is like "Bookmark for Julia"
          }),
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        });
        console.log("Created new bookmark for speaker:", textField);
      } else {
        console.log("Bookmark already exists, skipping creation");
      }
    }
    
    // Redirect back to where user came from (or /speakers)
    res.redirect(303, req.get("Referer") || "/speakers");
  } catch (error) {
    console.error("Error handling speaker bookmark:", error);
    res.status(500).send("Something went wrong.");
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
  res.render("about-us.liquid");
});

// Profile
app.get("/profile", async (req, res) => {
  res.render("profile.liquid");
});

// Profile bookmarks
app.get("/profile/bookmarks", async (req, res) => {
  res.render("profile-bookmarks.liquid");
});

// Port
app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function () {
  console.log(`http://localhost:${app.get("port")}`);
});