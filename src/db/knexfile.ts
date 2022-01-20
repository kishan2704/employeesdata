// Update with your config settings.

import Knex from "knex";



module.exports = {

  
  development: {
    client: 'postgresql',
    connection: {
      database: 'HR',
      user:     'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  

};
