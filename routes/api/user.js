const router = require("express").Router();
const profiles = require('../../models/user');

// this is the route /api/user/register

// router.post("/register",(req,res)=>{
//     profiles.create(req.body) .catch((err) => {
//         console.log(err);
//         res.status("500").json(erros);
//       }).then(profiles=>res.json(profiles),error=>
//     {console.log(error)
//       res.sendStatus(500)}).catch(error=>res.sendStatus(500));
//   });


router.post("/register",async (req,res)=>{
    const {username,
        password,
        phoneNumber,
        email,
        unit} = req.body;


       try {const newUser= await profiles.create(req.body)

        res.json(newUser);} catch (err) { console.log(err)
            res.sendStatus(500);
        }
  });

  

  module.exports= router;