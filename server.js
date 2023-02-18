const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>An Awesome App About Breads!');
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})