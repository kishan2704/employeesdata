const loginService = require('../service/login')


class loginClass{
    async login(request:any,response:any){
        const {Number,Password} = request.body;
        const result =await loginService.login(Number,Password)
        if(result === 'right'){
           
            response.send('login successfully')
        }
        else if(result === 'wrong'){
            response.send('invalid login details')
        }
        else if(result === 'invalid number'){
            response.send('invalid login details')
        }
    }
}

module.exports = new loginClass();