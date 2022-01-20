import { response } from "express"

const jsw = require('jsonwebtoken')

class generate{
    async token(id:number){
        const token = await jsw.sign({number:id},process.env.SECRETE_KEY)
      
        
        return token
    }
}

module.exports = new generate()

