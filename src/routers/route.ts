
require('dotenv').config()
const Express = require("express");
const router = Express.Router();
const parser = require('body-parser')



const regiController = require('../controller/registretion')
const loginController = require('../controller/login')
const getController = require('../controller/get')
const sendDataController = require('../controller/senddata')
const getDataController = require('../controller/getdata')

const knex1 = require('../db/knex')
const auth = require('../auth/auth')

router.use(parser.json());


router.post('/registration',regiController.register)

router.post('/login',loginController.login)
   
router.get('/get',auth,getController.getting)

router.post("/senddata",auth,sendDataController.sending)

router.get("/getdata",auth,getDataController.getting)

router.get('/update', (request:any,response:any)=>{
    const new1 = async ()=>{
        // const data =await knex1('employees').where({name: 'shivam'}).select()
        //  const data =await knex1('employees').whereNot({name: 'shivam'}).select()
        // const data = await knex1.select().from('employees').whereNotIn( 'name',['shivam','parth'])
        // const data = await knex1.select().from('employees').whereIn( 'name',['shivam','parth'])
        // const data = await knex1('employees').whereBetween('id',[3,6])

        // const data = await knex1('employees').where((builder:any)=>{
        //     builder.whereIn('id',[3,6])
        // }).select()

        // const data = await knex1('employees').where('id','>',5)
        // const data = await knex1.select('*').fromRaw('(select * from "employees" where "age" > ?)','30')
        //  const data = await knex1.column('name','age').select().from('employees')
        // const data = await knex1('employees').whereNotNull('age')
        // const data = await knex1('employees').whereRawIn('id = ?',[6])
        const data = await knex1('employees').join('registration', 'employees.id','registration.id').select('employees.id',
        'employees.name','employees.position','employees.age','registration.id','registration.number','registration.password')
         response.json(data)

    }
    new1()
   
   

})


module.exports = router;