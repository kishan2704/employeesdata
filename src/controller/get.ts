
const getService1 = require('../service/get')

class getClassC{
     async getting(request:any,response:any){
       const data = await getService1.sending()
       response.json(data)  
     }
}

module.exports = new getClassC()