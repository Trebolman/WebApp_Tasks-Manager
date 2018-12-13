// archivo de partida
'use strict';

// importamos
var mongoose = require('mongoose');

// Nos conectamos
var app = require('./app'); //importo un objeto express
var puerto = 3800;
mongoose.Promise = global.Promise; //global pertenece al kernel de NodeJS

// Creacion de rutas a traves de express
mongoose.connect('mongodb://localhost:27017/Agenda')
.then(()=>{
    console.log("Conexion a la base de datos 'Agenda' exitosa");
    app.listen(puerto,()=>{ // listen es propio de express
        console.log("El servidor corriendo correctamente: Puerto => 3800");
    }); // escuchador
}).catch(error=>{
    console.log(error);
});

// Ejemplo
// const express = require('express');
// const socketio = require('socket.io');
// const mongoose = require('mongoose');

// const http = require('http');
// const path = require('path');

// // initializing server and sockets
// const app = express();
// const server= http.createServer(app);
// const io = socketio.listen(server);

// // connection to the server
// mongoose.connect('mongodb://localhost/chat')
//   .then(db => console.log('db connected'))
//   .catch(err => console.log(err));

// // settings 
// app.set('port', process.env.PORT || 3000);

// // static files
// app.use(express.static(path.join(__dirname, 'public')));

// // sockets
// require('./sockets')(io);

// // starting the server
// server.listen(app.get('port'), () => {
//   console.log(`server on port ${app.get('port')}`);
// });