
const { register } = require("../controllers/userController");

const passport = require('passport')
const jwt = require('jsonwebtoken')
import { Request, Response, NextFunction } from 'express';


 const userRoutes =require("express").Router();


 userRoutes.get("/register",register)

 userRoutes.post('/signup', passport.authenticate('signup', { session: false }), async (req:any, res:Response, next:NextFunction) => {
    res.json({
      message: 'Signup successful',
      user: req.user,
    })
  })


  //

  
  userRoutes.post('/login', async (req:any, res:any, next:any) => {
    passport.authenticate('login', async (err:Error, user:any, info:any) => {
      try {
        if (err || !user) {
          const error = new Error('new Error')
          return next(error)
        }
  
        req.login(user, { session: false }, async (err:Error) => {
          if (err) return next(err)
          const body = { _id: user._id, email: user.email }
  
          const token = jwt.sign({ user: body }, 'top_secret')
          return res.json({ token })
        })
      }
      catch(e) {
        return next(e)
      }
    })(req, res, next)
  })
  

  userRoutes.get('/profile', passport.authenticate('jwt', { session: false }), (req:any, res:any, next:any) => {
    console.log(
        {
            message: 'You did it!',
            user: req.user,
            token: req.query.secret_token,
          }

    )
    res.json({
      message: 'You did it!',
      user: req.user,
      token: req.query.secret_token,
    })
  })
  

module.exports=userRoutes;

export {}