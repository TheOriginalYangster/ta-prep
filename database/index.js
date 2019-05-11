const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'twidder'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');
})

module.exports = con;