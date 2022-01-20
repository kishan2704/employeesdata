
const repoGet = require('../repository/getting')
const createToken = require('../auth/starting')
const Bcrypt = require('bcrypt')

class loginClass1{
    async login(Number:number,Password:any){
        const data =await repoGet.getting()
        try{ 
            const list = await data.find((f:any)=>f.number == Number)
            
            if(list.password.length >10){
                const slovedPassword =await Bcrypt.compare(Password,list.password)
                
                if(slovedPassword == true){
                    const token =await createToken.token(list.number)
                    console.log(token)
                    
                    return 'right'
                }
                else{
                     return 'wrong'
                }
            }else{
                
                if(list.password == Password){
                    const token =await createToken.token(list.number)
                    console.log(token)
                    return 'right'
                }
                else{
                     return 'wrong'
                }
            }
            
           
        }catch{
            return 'invalid number'
        }
       
        
    }

}

module.exports = new loginClass1()