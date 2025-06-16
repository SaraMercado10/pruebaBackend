const mongoose = require("mongoose");
const {Schema} = mongoose;
const UsuarioSchema = new Schema({
    email: {type: String, require: true},
    username: {type: String, require: true},
    password: {type: String, require: true},
    activo: {type: Boolean, require: true},
    perfil: {type: String, require: true}, //administrador, profesor, socio
    nombre: {type: String, require: true},
    apellido: {type: String, require: true},
    dni: {type: String, require: true},
    telefono: {type: String, require: true}
})
module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema)