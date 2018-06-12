const userModel = require('../lib/mysql.js')

module.exports = async (ctx) => {
  let driverState;
  await userModel.queryDriverState()
    .then(result => {
      driverState = result
    }).catch(e => {
      console.log(e)
    })
  ctx.state.data = {
    driverState
  }
}
