const Knex1 = require('../db/knex')

class repoget{
    async getting(){
        const data = await Knex1.select('*').from('registration');
       
        return data

    }
}

module.exports = new repoget()