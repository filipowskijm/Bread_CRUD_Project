const express = require('express')
require('dotenv').config()

// DEPENDENCIES
const methodOverride = require('method-override')

const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))


// ROUTES
app.get('/', (req, res) => {
    res.send('<h1>An Awesome App About Breads!');
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  
app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})