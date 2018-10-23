var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'leqxd777',
    database: 'electron'
});
// Connexion à la base de données
connection.connect();

// INSERTION
let sql_insert = 'INSERT INTO `employee`(`emp_name`) VALUES ("Tommy")';
connection.query(sql_insert);

// AFFICHAGE
let sql = 'SELECT `emp_id`,`emp_name` FROM `employee`';
connection.query(sql, function (error, results) {
    for (i = 0; i < results.length; i++) {
        document.getElementById("resultDiv_2").innerHTML += results[i].emp_name + "\r\n";
    }
});
// Fin de connexion à la base de données
connection.end();