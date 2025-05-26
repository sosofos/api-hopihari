const mysql = require("../mysql");

exports.cadastrarBrinquedo = async (req, res) => {
    try{
        const resultados = await mysql.execute(`
            insert into rides (name, time_waiting, status, area) values (?, ?, ?, ?)
            `,[
                req.body.name,
                req.body.time_waiting,
                req.body.status,
                req.body.area 
            ]);
    }catch(error) {
        return res.status(500).send(error);
    }
}








