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

  vehicle: {
    type: String,
    required: false
  },


  /*boolean: Boolean,*/

  /*array: Array,*/

  /*date: {
    type: Date,
    default: Date.now
  },*/

  /*longstring: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."]
  }*/
});

const profiles = mongoose.model("Profiles", dbprofilesSchema);

module.exports = profiles;