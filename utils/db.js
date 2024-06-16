const mysql = require('mysql2/promise');
const util = require('util');


const sql = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'banks'
})


module.exports = sql;