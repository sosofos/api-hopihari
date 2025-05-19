const mysql  = require("../mysql");

exports.getNotificacoes = async (req, res, next) => {
    try{
        const resultado = await mysql.execute(
            `select * from notifications where status = true and users_id = ?`,
            [res.locals.idUsuario]
        );
        return res.status(200).send({"Resultados": resultado});
    } catch (error){
        return res.status(500).send(error);
    }
}