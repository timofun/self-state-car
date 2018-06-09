/**
 * ajax 服务路由集合
 */
const router = require('koa-router')();
const controllers = require('../controllers')

router.get('/demo', controllers.demo)

router.get('/statusDetail', controllers.statusDetail)


module.exports = router
