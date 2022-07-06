
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const { IUser, User }  = require('../model/User')
import { Request, Response, NextFunction } from 'express';
import { Token } from 'typescript';

const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email:string, password:string | number, next:any) => {
    try {
        const user = await User.create({ email, password })
        return next(null, user)
    } catch (e) {
        next(e)
    }
}))

passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email:string, password:string | number, done:any) => {
    try {
        const user: any = await User.findOne({ email })
        if (!user) {
            return done(null, false, { message: 'User not found' })
        }

        const validate = await user.comparePassword(password)

        if (!validate) {
            return done(null, false, { message: 'Wrong password' })
        }

        return done(null, user, { message: 'Login successfull' })
    } catch (e) {
        return done(e)
    }
}))

passport.use(new JWTStrategy({
    secretOrKey: 'top_secret',
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token:any, done:any) => {
    try {
        return done(null, token.user)
    } catch (e) {
        done(e)
    }
}))