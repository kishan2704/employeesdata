const sendDataService = require('../service/senddata')

class sendDataClass{
    async sending(request:any,response:any){
        const data =await sendDataService.sendData(request.body)
        console.log(data)
        response.send('done')
        return data

    }
}

module.exports = new sendDataClass()