var mysql = require('mysql');
var config = require('../config')

var pool  = mysql.createPool({
  host     : config.mysql.host,
  user     : config.mysql.user,
  password : config.mysql.password,
  database : config.mysql.db,
  port     : config.mysql.port
});

let query = ( sql, values ) => {

  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        console.log('请求失败')
        reject( err )
      } else {
        console.log('请求成功')
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}


// let query = function( sql, values ) {
// pool.getConnection(function(err, connection) {
//   // 使用连接
//   connection.query( sql,values, function(err, rows) {
//     // 使用连接执行查询
//     console.log(rows)
//     connection.release();
//     //连接不再使用，返回到连接池
//   });
// });
// }


// 查询所有文章
exports.findAllPost =  () => {
  let _sql = `select * from user_databases ORDER BY time desc LIMIT 10;`
  return query( _sql)
}


