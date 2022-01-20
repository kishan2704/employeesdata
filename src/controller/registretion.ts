const regiService = require('../service/registretion')

class regi{
    async register(request:any,response:any){
        
        const data = await regiService.send(request.body)
        
        response.send("done")
        return data


    }
    
}

module.exports = new regi()