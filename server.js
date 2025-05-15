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
