const Knex2 = require('../db/knex')

class senddata{
    async sending(Name:string,Position:string,Age:string){
        const [id] = await Knex2('employees').insert({name:Name,position:Position,age:Age}).returning('id')
        return id

    }
}

module.exports = new senddata()