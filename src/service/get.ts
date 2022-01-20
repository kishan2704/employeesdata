const repoGetting = require('../repository/getting')

class getClass{
       sending(){
           const data = repoGetting.getting()
           return data
       }
       
}

module.exports = new getClass()