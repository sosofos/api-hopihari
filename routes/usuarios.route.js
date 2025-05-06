const express = require("express");
const router = express.Router();
const usuariosCotroller = require("../controllers/usuarios.controller");

router.put( "/:id", usuariosCotroller.atualizarUsuario);
router.post( "/login", usuariosCotroller.login);

router.post( "/", usuariosCotroller.cadastrarUsuario);

module.exports = router;