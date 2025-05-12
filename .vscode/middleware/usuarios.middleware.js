const jwt = require("jsonwebtoken");

exports.required = async (req, res, next) => {
    try {
        res.local.idUsuario = 0;

        const token = req.headers.authorization.split(" ")[1];
        const decode = await jwt.decode(token, "senhajwt");

            if (decode.id) {
                
                res.local.idUsuario = id;
                next();
            } else {
                return res.status(401).send({ "mensagem": "usuario não autenticado!" });
            }
        
    } catch (error) {
        return res.status(500).send({ "error": error });

    }
}


