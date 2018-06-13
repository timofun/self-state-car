const Koa = require('koa')
const path = require('path')
var cors = require('koa-cors');
const static = require('koa-static');
const debug = require('debug')('status')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')

const app = new Koa()

const staticPath = './static'

app.use(static(
  path.join(__dirname, staticPath)
))

// 跨域
app.use(cors());

// 使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyParser())

// 引入路由分发
const router = require('./routes')
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))

