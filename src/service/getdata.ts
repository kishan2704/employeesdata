const repoGet1 = require('../repository/getdata')

class getDataClass{
    getting(){
        const data = repoGet1.getting()
        return data
    }

}

module.exports = new getDataClass();