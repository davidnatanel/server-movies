import { model, Schema, Document } from "mongoose";

export interface IMovie extends Document {
   adult:Boolean
   backdrop_path:String
   genre_ids:[]
   id:Number
   original_language:String
   original_title:String
   overview:String
   popularity:Number
   poster_path:String
   release_date:String
   title:String
   video:Boolean
   vote_average:Number
   vote_count:Number
 };
 


const movieSchema = new Schema({
  adult: {
    type: Boolean,
  },
 backdrop_path:{
    type:String
 },
 genre_ids:{
    type:Array
 },
 id:{
    type:Number
 },
 original_language:{
    type:String
 },
 original_title:{
    type:String
 },
 overview:{
    type:String
 },
 popularity:{
    type:Number
 },
 poster_path:{
    type:String
 },
 release_date:{
    type:String
 },
 title:{
    type:String
 },
 video:{
    type: Boolean,
 },
 vote_average:{
    type:Number
 },
 vote_count:{
    type:Number
 }

});

export default model<IMovie>("Movie", movieSchema);