const router = require("express").Router();
const userRoutes = require ('./user');

//if i need to change the api route.
router.use('/user',userRoutes);

module.exports= router;