const usuarioCtrl = require('./../controllers/usuario.controller');
//manejador de rutas
const express = require('express');
const router = express.Router();
//guardar usuario
router.post('/', usuarioCtrl.createUsuario);
//editar usuario
router.put('/:id', usuarioCtrl.editUsuario);
//borrar usuario
router.delete('/:id', usuarioCtrl.deleteUsuario);
//obtener usuarios
router.get('/', usuarioCtrl.getUsuarios);
//obtener usuario por id
router.get('/:id', usuarioCtrl.getById);
//obtener usuario por email
router.get('/dni', usuarioCtrl.getByEmail);
//exportamos el modulo de rutas
module.exports = router;