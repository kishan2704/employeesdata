
exports.up = function(knex:any):any {
  return knex.schema
  .createTable('employees',(table:any)=>{
      table.increments('id');
      table.string('name').notNullable();
      table.string('position').notNullable();
      table.string('age').notNullable();
      table.timestamps(true,true)
  })
  .createTable('registration',(table:any)=>{
    table.increments('id');
    table.string('name').notNullable();
    table.integer('number').notNullable();
    table.string('password').notNullable();
    })
};

exports.down = function(knex:any) {
    return knex.schema.dropTable('employees').dropTable('registration')
  
};
