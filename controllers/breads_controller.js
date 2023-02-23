const express = require('express')
const breads = express.Router()
const Bread = module.require('../models/breads.js')

// INDEX
breads.get('/', (req, res) => {
  console.log(Bread)
  // res.send('This is the index at /breads')
  res.render('index', {
    'breads': Bread,
    'title': 'Breads Index Page'
  });
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
  res.render('Show', {
    bread: Bread[req.params.arrayIndex]
  })
  } else {
  res.send('404')
  }
})

// CREATE
breads.post('/', (req, res) => {
  if(!req.body.image) {
    req.body.image = 'https://img66.anypromo.com/product2/large/bread-slice-stress-relievers-p643797_color-brownbeige.jpg/v5'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = 'true'
  } else {
    req.body.hasGluten = 'false'
  }
  Bread.push(req.body)
  res.redirect('/breads')
})
  
module.exports = breads
