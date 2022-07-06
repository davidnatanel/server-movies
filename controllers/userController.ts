const User = require('../model/User');
const brcypt = require('bcrypt')
import { Request, Response, NextFunction } from 'express';


    export const register= async (req:Request,res:Response,next:NextFunction)=>{
    res.send('hola')

}
