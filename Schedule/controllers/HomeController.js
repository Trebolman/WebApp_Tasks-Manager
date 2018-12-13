'use strict'
var Agenda = require("../modelos/Agenda");

var path_module = require('path');

// Creamos el controlador
var controlador = {
    inicio: function(req,res){
        return res.status(200).send({message: "Inicio de agenda iPlain"});
    },
    
    AddTask: function(req, res){
        console.log(req.body);
        var objAgenda = new Agenda();
        console.log("Objeto Agenda creado");

        var params = req.body;
        // creo un objeto que reciba parametros
        objAgenda.name = params.name;
        objAgenda.description = params.description;
        objAgenda.state = "Pendiente";

        // guardo el proyecto creado
        objAgenda.save((err, agendaGuardada)=>{
            if(err){
                return res.status(500).send({Error: "Error 500 al crear agenda"});
            }
            if(!agendaGuardada){
                return res.status(404).send({Error: "Error 404 al crear agenda"});
            }
            return res.status(200).send({Agenda: agendaGuardada});
            
        });

    },

    getTasks: function(req, res){
        Agenda.find().exec((err,agendas)=>{
            if(err){
                return res.status(500).send({Error: "Error 500 no se pudo cargar agendas"});
            }
            if(!agendas){
                return res.status(404).send({Error: "Error 404 no se cargaron correctamente agendas"});
            }
            return res.status(200).send({Agenda: agendas});
        });
    },

    editTask: function(req, res){
        var newParams = req.body;
        // var newParams = {state:"Hecho"};
        var agendaId = req.params.id;
        Agenda.findByIdAndUpdate(agendaId,newParams,{new:true},(err,agendaCambiada)=>{
            if(err){
                return res.status(500).send({Error:"Error 500 al actualizar la agenda"});
            }
            if(!agendaCambiada){
                return res.status(404).send({Error:"Error 404 No existe agenda a actualizar"});
            }
            return res.status(200).send({actualizado: agendaCambiada});
        });
    },

    removeTask: function(req, res){
        // var newParams = {state:"Hecho"};
        var agendaId = req.params.id;
        Agenda.findByIdAndRemove(agendaId,(err,agendaEliminada)=>{
            if(err){
                return res.status(500).send({Error:"Error 500 al eliminar la agenda"});
            }
            if(!agendaEliminada){
                return res.status(404).send({Error:"Error 404 No existe agenda a eliminar"});
            }
            return res.status(200).send({eliminado: agendaEliminada});
        });
    }
}

module.exports = controlador;