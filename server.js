const mongoose = require("mongoose");

const profiles = require("./profilesDB.js");
/*
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbprofiles", { useNewUrlParser: true });*/

const uri = process.env.MONGODB_URI || "mongodb://localhost/dbprofiles";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongo connection established successfully.");
  })
  .catch(console.error);

const data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: 42
};

profiles.create(data)
  .then(dbprofiles => {
    console.log(dbprofiles);
  })
  .catch(({ message }) => {
    console.log(message);
  });