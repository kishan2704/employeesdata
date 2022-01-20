const  Knex = require('../db/knex')
const bcrypt = require('bcrypt')

class reposend{
    async sending(Name:string,Number:number,Password:string){
        const securePassword =await bcrypt.hash(Password,10)
        console.log(securePassword)
        const [id] =await Knex('registration').insert({name:Name,number:Number,password:securePassword}).returning('id')
        
        return id

    }
}


module.exports = new reposend()