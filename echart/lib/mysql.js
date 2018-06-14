var mysql = require('mysql');
var config = require('../config')

var pool = mysql.createPool({host: config.mysql.host, user: config.mysql.user, password: config.mysql.password, database: config.mysql.db, port: config.mysql.port});

let query = (sql, values) => {

  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log('请求失败')
        reject(err)
      } else {
        console.log('请求成功')
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })

}

// let query = function( sql, values ) { pool.getConnection(function(err,
// connection) {   // 使用连接   connection.query( sql,values, function(err, rows) {
//     // 使用连接执行查询     console.log(rows)     connection.release();
// //连接不再使用，返回到连接池   }); }); } 查询最近一条数据
exports.queryDriverState = () => {
  let _sql = `
      select * from driver_condition ORDER BY id desc LIMIT 1
    `
  return query(_sql)
}

// 查询最近一条数据
exports.findNearestOne = () => {
  let _sql = `
      select * from user_databases ORDER BY id DESC LIMIT 1
    `
  return query(_sql)
}

// 查询最近7天每一天的平均值
exports.findAllPost = () => {
  let _sql = `
      select time, TRUNCATE(AVG(age), 0) as age, TRUNCATE(AVG(height), 0) as height, TRUNCATE(AVG(weight), 1) as weight, TRUNCATE(AVG(rate), 2) as rate, TRUNCATE(AVG(blood), 2) as blood
      from user_databases
      group by time ORDER BY time DESC LIMIT 7
    `
  return query(_sql)
}