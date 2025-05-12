const express = require("express")
const router = express.Router();

router.post("/", ()=>{
    console.log("rota de fila")});

module.exports = router;