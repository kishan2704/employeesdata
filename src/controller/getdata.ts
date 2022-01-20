const getService = require('../service/getdata')


class getData{
    async getting(request:any,response:any){
        const data = await getService.getting()
        response.json(data)
    }

}

module.exports = new getData();