const express = require('express');
const UsuarioSchema = require("../models/Usuario");

const router = express.Router();

//crear un nuevo usuario
router.post('/usuarios', (req, res)=>{
     const usuario=new UsuarioSchema(req.body);
     usuario
     .save() //metodo que guarda en la base de datos
     .then((data)=> res.json(data))
     .catch((error)=>res.json({message: error}));
});

router.get('/usuarios/:correo', (req, res)=>{
    const{correo}= req.params;
    UsuarioSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message: error}));
});

router.delete('/usuarios/:correo', (req, res)=>{
    const{correo}= req.params;
    UsuarioSchema
    .remove({_correo:correo})
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message: error}));
});

router.put('/usuarios/:correo', (req, res)=>{
    const{correo}= req.params;
    UsuarioSchema
    .updateOne({_correo:correo}, {$set:{nombre, correo, contrasena}})
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message: error}));
});


module.exports = router;