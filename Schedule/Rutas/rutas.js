'use strict'
var express = require('express');
var controlador = require('../controllers/HomeController');
var router = express.Router(); //enrutador

router.get('/inicio',controlador.inicio);
router.post('/AddTask',controlador.AddTask);
router.post('/getTasks',controlador.getTasks);
router.put('/editTask/:id',controlador.editTask);
router.delete('/removeTask/:id',controlador.removeTask);


module.exports = router;