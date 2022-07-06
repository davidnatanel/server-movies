const User = require('../model/Movie');
const brcypt = require('bcrypt')
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';


export const chargermovies=async (req:Request,res:Response,next:NextFunction)=>{
    const {data} = await axios.get
    (`https://api.themoviedb.org/3/discover/movie`
    , {
        params: {
            api_key: `3e37ec95e819bc7f02bc0ff43c46497a`,
            
        }
    })
    res.send(data.results)
    
}


export const Search=async (req:Request,res:Response,next:NextFunction)=>{
}
