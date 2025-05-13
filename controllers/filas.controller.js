const mysql = require("../mysql")

exports.verificarBrinquedo = async  (req, res) =>{
    try{
        const resultado = await mysql.execute(`
            select * from rides where id = ?;
            `, [req.params.idRide]) 

            if (resultado.lenght == 0) {
                return res.status(404).send({"Mensagem": "Brinquedo não encontrado"});
            }
            next( );
    }catch (error){
        return res.status(500).send(error);
    }
}




exports.entrarFila = async (req, res, next)=>{
    try{
        const resultados = await mysql.execute(`
            insert into hopi_hari_db.lines (id_user, id_rides) values(?, ?)
            `, [
                res.locals.idUsuario, req.params, idRides
            ]); return res.status(201).send({"Mensagem": resultados})
    }catch (error){
        return res.status(500).send(error)
    }
}