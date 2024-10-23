const express = require('express'); //da inicio al servidor evitando varias configuraciones
const mongoose = require('mongoose');
const usuarioRoutes = require('../routes/usuario');

const app=express(); //settings

app.use(express.json());
app.use("/api",usuarioRoutes);


app.get('/', (req, res)=> {
    res.send('Servidor funcionando');//ruta por defecto
});

//conexion a la base de datos
mongoose.connect('mongodb+srv://maryselavelasco:JuanSol029@cluster0.pkc6k.mongodb.net/Interivalle?retryWrites=true&w=majority')
    .then(()=> console.log("conectado a Mongo Atlas"))

    .catch((error)=>console.error(error));

app.listen(10000); //se precisa el puerto de escucha del servidor