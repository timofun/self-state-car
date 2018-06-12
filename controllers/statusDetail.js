const userModel = require('../lib/mysql.js')

module.exports = async (ctx) => {
  let statusList;
  await userModel.findAllPost()
    .then(result => {
      statusList = result
    }).catch(e => {
      console.log(e)
    })
  ctx.state.data = {
    statusList
  }
}