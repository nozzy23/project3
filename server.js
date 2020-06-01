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

/*const data = {
  
  username: "nick",
  email: "nick@test.com",
  phoneNumber: 4894986845
};
profiles.create(data)
  .then(dbprofiles => {
    console.log(dbprofiles);
  })
  .catch(({ message }) => {
    console.log(message);
  });*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/register",(req,res)=>{
  profiles.create(req.body).then(profiles=>res.json(profiles),error=>
  {console.log(error)
    res.sendStatus(500)}).catch(error=>res.sendStatus(500));
})

app.get("/api",(req,res)=>{
  res.sendStatus(200);
})

app.get("/api/profiles",(req,res)=>{
  profiles.find({}).then(profiles=>res.json(profiles),error=>res.sendStatus(500)).catch(error=>res.sendStatus(500));
})

app.post("/api/login",(req,res)=>{
  profiles.findOne({
    username:req.body.username
  }).then(profiles=>{
    if(profiles.password===req.body.password) {
      res.json(profiles);
    } else {
      res.sendStatus(401)
    }
  },error=>res.sendStatus(500)).catch(error=>res.sendStatus(500));
})



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
