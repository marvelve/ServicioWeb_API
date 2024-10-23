const mongoose= require('mongoose');

const UsuarioSchema= mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true,
        unique: true
    },
    contrasena:{
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});
module.exports= mongoose.model('Usuario', UsuarioSchema);