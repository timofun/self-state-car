/**
 * ajax 服务路由集合
 */
const router = require('koa-router')();
const controllers = require('../controllers')

router.get('/findNearestOne', controllers.findNearestOne)

router.get('/statusDetail', controllers.statusDetail)


module.exports = router
