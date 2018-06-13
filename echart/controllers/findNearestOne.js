const userModel = require('../lib/mysql.js')

module.exports = async (ctx) => {
  let nearestOne;
  await userModel.findNearestOne()
    .then(result => {
      nearestOne = result
    }).catch(e => {
      console.log(e)
    })
  ctx.state.data = {
    nearestOne
  }
}
