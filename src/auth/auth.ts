import { response } from "express";
import { request } from "http";
const jwt = require('jsonwebtoken');
require('dotenv').config();



const auth =async (request:any,response:any,next:any) =>{
    try{ 
        const ftoken = await request.headers['authorization'];
        const stoken = await ftoken.split(' ');
        const token = stoken[1]
        const verifyuser = await jwt.verify(token,process.env.SECRETE_KEY)
        console.log(verifyuser)
        next();
    }catch(err){
        response.send(err)
        next()

    }
   
}

module.exports = auth