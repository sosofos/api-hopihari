const mysql = require("../mysql")

exports.entrarFila = async (req, res, next)=>{
    try{
        const resultados = await mysql.execute(`
            insert into lines (id_user, id_rides) values(?, ?)
            `, []);

    }catch (error){
        return res.status(500).send(error)
    }
}