import { chargermovies } from '../controllers/movieController'


const movieRoutes =require("express").Router();

movieRoutes.get("/chargeMovies",chargermovies)

module.exports=movieRoutes;
