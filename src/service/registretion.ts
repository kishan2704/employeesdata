const repo = require('../repository/sending')
const createtoken = require('../auth/starting')

class register{
      async send(data:any){
          const {Name,Number,Password} = data
          const token = await createtoken.token(Number);
          console.log(token)
          return [repo.sending(Name,Number,Password),token]
      }
}

module.exports = new register()