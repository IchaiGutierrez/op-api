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

module.exports = router;


