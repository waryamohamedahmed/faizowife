const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
  nameofallah: {
    type: String,
    required: true
  },
  dua: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Text', TextSchema);