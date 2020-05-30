const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require("mongoose");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mytodos",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const db=require("./models");
const md5=require("md5");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register",(req,res)=>{
  db.User.create({
    username:req.body.username,
    password:md5(req.body.password)
  }).then(user=>res.json(user),error=>res.sendStatus(500)).catch(error=>res.sendStatus(500));
})

app.get("/",(req,res)=>{
  res.sendStatus(200);
})



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
