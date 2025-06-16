const Usuario = require('../models/usuario');
const usuarioCtrl = {};

//Guardar usuario
usuarioCtrl.createUsuario = async (req, res) => {
    var usuario = new Usuario(req.body);
    try{
        await usuario.save();
        res.json({
            'status': '1',
            'msg': 'Usuario guardado'
        })
    } catch(error) {
        res.status(400).json({
            'status': '0',
            'msg':'error procesando operacion'
        })
    }
}

//editar usuario
usuarioCtrl.editUsuario = async(req, res) => {
    const vusuario = new Usuario(req.body);
    try{
        await Usuario.updateOne({_id: req.body._id}, vusuario);
        res.json({
            'status': '1',
            'msg': 'Usuario editado'
        })
    } catch(error) {
        res.status(400).json({
            'status': '0',
            'msg':'error procesando operacion'
        })
    }
}

//eliminar usuario
usuarioCtrl.deleteUsuario = async (req, res) => {
    try{
        await Usuario.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Usuario eliminado'
        })
    }catch(error) {
        res.status(400).json({
            'status': '0',
            'msg':'error procesando operacion'
        })
    }
}

//obtener todos los usuarios
usuarioCtrl.getUsuarios = async(req, res) => {
    var usuarios = await Usuario.find();
    res.json(usuarios);
};
//obtener por id
usuarioCtrl.getById = async (req, res) => {
    try{
        const usuario = await Usuario.find({_id: req.params});
        res.json(usuario);
    } catch (error){
        res.status(400).json({
            status: "0",
            msg: "error procesando la operacion"
        });
    }
};
//obtener por email
usuarioCtrl.getByEmail = async (req, res) => {
    try{
        const {email} = req.query;
        const usuario=await Usuario.find({email:req.params.email});
        res.json(usuario);
    } catch (error) {
        res.status(400).json({
            status: "0",
            msg: "error procesando la operacion"
        });
    }
};

module.exports = usuarioCtrl;