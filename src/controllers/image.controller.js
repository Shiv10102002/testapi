import {Images} from "../models/image.model.js";
import { errorHandler } from "../utils/error.js";
export const getAllpic = async(req,res,next)=>{
  try{
       const images = await Images.find();
       if(!images){
         return next(errorHandler(404, 'Images not found'));
       }
       res.status(200).json(images);
  }catch(e){
    next(e);
  }
}