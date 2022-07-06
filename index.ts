const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Routes = require("./routes/index")
import passport  =require("passport") ;

const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize())

require("dotenv").config()
require('./auth/index')
app.use(cors());
app.use(express.json());

app.use("/",Routes);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{console.log('DB Connection successfull')})
.catch((err:Error)=>{console.log(err.message)})


 app.listen(process.env.PORT, ()=>{
    console.log(`Server Started on Port ${process.env.PORT}`);
})