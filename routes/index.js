/**
 * ajax 服务路由集合
 */
const router = require('koa-router')();
const controllers = require('../controllers')

router.get('/queryDriverState', controllers.queryDriverState)

router.get('/findNearestOne', controllers.findNearestOne)

router.get('/statusDetail', controllers.statusDetail)

module.exports = router
