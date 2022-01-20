const Knex3 = require('../db/knex')

class getdata{
    async getting(){
        const data = await Knex3.select('*').from('employees')
        return data

    }
}

module.exports = new getdata();