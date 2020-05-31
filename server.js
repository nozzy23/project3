const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

const profiles = require("./profilesDB.js");

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
      "new test 2",
  number: 4
};

profiles.create(data)
  .then(dbprofiles => {
    console.log(dbprofiles);
  })
  .catch(({ message }) => {
    console.log(message);
  });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
