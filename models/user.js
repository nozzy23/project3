const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbprofilesSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "password is required"
  },
  
  phoneNumber: {
    type: Number,
    unique: true,
    required: true
  },

  email: {
    type: String, 
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  unit: {
    type: Number,
    required: true
  },

  favoriteVehicle: 
    []

});

const profiles = mongoose.model("Profiles", dbprofilesSchema);

module.exports = profiles;