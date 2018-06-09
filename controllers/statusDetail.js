const userModel = require('../lib/mysql.js')

module.exports = async (ctx) => {
  let statusList;
  await userModel.findAllPost()
    .then(result => {
      console.log('11111', result)
      statusList = result
    }).catch(e => {
      console.log(e)
    })
  ctx.state.data = {
    statusList
  }
}

// module.exports = async (ctx) => {
//   ctx.state.data = {
//     msg: 'hello 小程序'
//   }
// }