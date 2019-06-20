const mysql = require('mysql');
// import mysql from 'mysql'

const  conn = mysql.createConnection({
    host:'127.0.0.1',//数据库地址
    user:'root',
    password:'root',
    database:'lk_pdd'
});

conn.connect();
module.exports = conn;