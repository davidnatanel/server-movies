
import { register } from '../controllers/userController'
import { chargermovies } from '../controllers/movieController'
const  userRoutes  = require('../routes/userRoutes')
const  movieRoutes  = require('../routes/movieRoutes')



const router =require("express").Router();


router.use("/user",userRoutes)
router.use("/movie",movieRoutes)

module.exports=router;

export {}