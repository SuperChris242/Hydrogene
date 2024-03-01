const mongoose = require('mongoose');

const stuffSchema = new mongoose.Schema({
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Stuff = mongoose.model('Stuff', stuffSchema);

module.exports = Stuff;