import {conn} from '../database.js';


export const postUsers =  async (req,res) => {
    try {
        const correo = req.body.correo;
        const [resultados] = await conn.query('SELECT correo FROM usuarios')
        const correoExistente = resultados.find(e => e.correo === correo);
        if (correoExistente) {
            return res.status(409).json({ error: 'Ya existe este correo' });
        } else {
            const [resultado] = await conn.query('INSERT INTO usuarios(correo) VALUE (?)',[correo]);
            res.json(resultado);
        }
    } catch (error) {
        return res.status(502).json({error})
    }
}


export const getUser = async(req, res) => {
    try {
        const correo = req.params.correo;
        const [resultado] = await conn.query("SELECT * FROM usuarios WHERE correo = ?",[correo]);
        res.json(resultado);
    } catch (error) {
        console.log(error);
    }
}


