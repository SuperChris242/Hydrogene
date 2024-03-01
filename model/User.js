// userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  location: String,
  loc: {
    type: { type: String },
    coordinates: []
  }
});

// Créer un index géospatial sur le champ de géolocalisation "loc"
userSchema.index({ loc: '2dsphere' });

const User = mongoose.model('User', userSchema);

module.exports = User;
