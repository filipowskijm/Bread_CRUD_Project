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

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.render('404')
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

// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})

module.exports = breads
