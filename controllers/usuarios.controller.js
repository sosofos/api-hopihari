const mysql = require("../mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

exports.atualizarUsuario = async (req, res) => {
    try {
        const idUsuario = Number(req.params.id);
        const resultado = await mysql.execute(
            `   UPDATE users
                   SET name 	= ?,
                       email 	= ?,
                       password = ?
                 where id = ?;`,
            [req.body.name,
            req.body.email,
            req.body.password,
                idUsuario]
        );

        return res.status(200).send({
            "Mensagem": "Usuario atualizado com sucesso!",
            "Resultado": resultado
        });

    } catch (error) {
        return res.status(500).send({ "Mensagem": error });

    }
}

exports.cadastrarUsuario = async (req, res) => {
    try {
    
        const resultado = await mysql.execute(
        `INSERT INTO users (
            first_name,
            last_name,
            email,
            password,
            birth_date,
             phone)
            values (?, ?, ?, ?, ?, ?);`,[
                req.body.first_name, 
                req.body.last_name,
                req.body.email, 
                hash,
                req.body.birth_date,
                req.body.phone
            ]);

        return res.status(200).send({
            "Mensagem": "Usuario Cadastrado com Sucesso",
            "Resultado": resultado
        });

    } catch (error) {
        return res.status(500).send({ "Mensagem": error });

    }
}

exports.atualizarUsuario = async (req, res) =>{

}
exports.cadastrarUsuario = async (req, res) =>{
    
}



const hash = await bcrypt.hash (req, body, password, 10);

const match = await bcrypt.compare(usuario[0].password, req.body.password);

if (!match){
    return res.status(401).send({"mensagem": "senha incorreta!"})
}
exports.login = async (req, res) => {
    try {
        const usuario = await mysql.execute(
            `select * from users where email = ?`
            [
                req.body.email
            ] 
        );console.log(usuario)



        if (usuario.lenght == 0){
            return res.status(401).send({"Mensagem": "Usuario não cadastrado"});
        }
        const match = await bcrypt.compare(usuario[0].password, req.body.password)
        if (!match) {
            return res.status(401).send({ 
                "mensagem": "senha incorreta!"
            });
        }
       

        const token = jwt.sign(
            { id: usuario[0].id, email: usuario[0].email },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        );


        return res.status(201).send({ 
            "mensagem": "Usuario logado com sucesso!",
            "resultado": resultado
             });


        
    } catch (error){
        return res.status(500).send({"Error": error })
    }
}