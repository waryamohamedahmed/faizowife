const express = require('express');
const router = express.Router();

// Load Book model
//const Book = require('../../models/Book');

const Book = require('../models/Text.js');




// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Book.find()
      .then(data => res.json(data))
      .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
  });

  



// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Book.create(req.body)
    .then(data => res.json({ msg: 'Book added successfully',data }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});




module.exports = router;