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
const webinarsDetailsEndpoint = "/webinars?fields=*,speakers.*.*,resources.*.*,categories.*.*"

// Routes
app.get('/', async function (request, response) {
  response.render('index.liquid')
})

app.get('/amber', async function (request, response) {
  response.render('amber.liquid')
})

app.get('/julia', async function (request, response) {
  response.render('julia.liquid')
})

app.get('/anouk', async function (request, response) {
  response.render('anouk.liquid')
})

// Port
app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`http://localhost:${app.get('port')}`)
})
