var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.send(req);
});


/*Ejemplo de post*/ 
router.post('/hola', function (req, res) {
  res.send('[POST]Saludos desde express equipo de ArjamexIt');
});
router.get('/hola', function (req, res) {
  res.send('[GET]Saludos desde express equipo de ArjamexIt');
});


//Sql conection
var mysql      = require('mysql');
const CONNECTION = require('../settings/database');
var datos = [];
var connection = mysql.createConnection(CONNECTION);

connection.connect();
connection.query('SELECT * FROM users', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0]);
  datos.push(rows[0]);
});




connection.end();

router.get('/conn', function (req, res) {
  res.send(datos);
 
});

module.exports = router;


