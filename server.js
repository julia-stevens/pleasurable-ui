// Import
import express from 'express'
import { Liquid } from 'liquidjs';
import methodOverride from "method-override" // Importeer de "method-override" module, die het mogelijk maakt om HTTP-methoden te gebruiken

// Express
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// Method Override
app.use(methodOverride("_method"))

// Liquid
const engine = new Liquid()
app.engine('liquid', engine.express())

// Views
app.set('views', './views')

// API links
const api = "https://fdnd-agency.directus.app/items/avl_"
const categoriesEndpoint = "categories"
const commentsEndpoint = "comments"
const contouringsEndpoint = "contourings"
const speakersEndpoint = "speakers"
const usersEndpoint = "users"
const webinarsEndpoint = "webinars"
const messagesEndpoint = "messages"
const webinarsDetailsEndpoint = "webinars?fields=*,speakers.*.*,resources.*.*,categories.*.*"
const slugFilter = "?filter[slug][_eq]="

// Routes
// Home
app.get('/', async function (request, response) {
  response.render('index.liquid')
})

// Webinars
app.get('/webinars', async function (request, response) {
  const webinarsDetailResponse = await fetch(`${api}${webinarsEndpoint}`)
  const webinarsDetailResponseJSON = await webinarsDetailResponse.json()

  response.render('webinars.liquid', {
    webinars: webinarsDetailResponseJSON.data
  })
})

// Webinars detail
app.get('/webinars/:slug', async function (request, response) {
  const slug = request.params.slug 
  const webinarDetailResponse = await fetch(`${api}${webinarsEndpoint}${slugFilter}${slug}`)
  const webinarDetailResponseJSON = await webinarDetailResponse.json()

  console.log(webinarDetailResponseJSON.data)

  response.render('webinars-detail.liquid', {
    webinars: webinarDetailResponseJSON.data
  })
})

// Contourings
app.get('/contourings', async function (request, response) {
  const contouringsResponse = await fetch(`${api}${contouringsEndpoint}`)
  const contouringsResponseJSON = await contouringsResponse.json()

  response.render('contourings.liquid', {
    contourings: contouringsResponseJSON.data
  })
})

// Contourings detail
app.get('/contourings/:slug', async function (request, response) {
  const slug = request.params.slug
  const contouringsDetailResponse = await fetch(`${api}${contouringsEndpoint}${slugFilter}${slug}`)
  const contouringsDetailResponseJSON = await contouringsDetailResponse.json()  

  console.log(contouringsDetailResponseJSON)

  response.render('contourings-detail.liquid', {
    contourings: contouringsDetailResponseJSON.data
  })
})

// Speakers
app.get('/speakers', async function (request, response) {
  const speakersResponse = await fetch(`${api}${speakersEndpoint}`)
  const speakersResponseJSON = await speakersResponse.json()

  response.render('speakers.liquid', {
    speakers: speakersResponseJSON.data
  })
})

// Speakers detail
app.get('/speakers/:slug', async function (request, response) {
  const slug = request.params.slug
  const speakersDetailResponse = await fetch(`${api}${speakersEndpoint}${slugFilter}${slug}`)
  const speakersDetailResponseJSON = await speakersDetailResponse.json()

  response.render('speakers-detail.liquid', {
    speakers: speakersDetailResponseJSON.data
  })
})

// About us
app.get('/about-us', async function (request, response) {
  response.render('about-us.liquid')
})

// Profile
app.get('/profile', async function (request, response) {
  response.render('profile.liquid')
})

// Profile bookmarks
app.get('/profile/bookmarks', async function (request, response) {
  response.render('profile-bookmarks.liquid')
})

// Port
app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`http://localhost:${app.get('port')}`)
})