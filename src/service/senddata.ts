const repoSendData = require('../repository/senddata')

class sendData{
    sendData(data:any){
        const {Name,Position,Age} = data
        return repoSendData.sending(Name,Position,Age)
    }

}

module.exports = new sendData()