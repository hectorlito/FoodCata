const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true},
  img: { type: String, default: '' }

});

module.exports = mongoose.model('Food', foodSchema);
