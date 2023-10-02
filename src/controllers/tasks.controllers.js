import {conn} from '../database.js'

let userId;
export const gettasks = async (req,res) => {
    try {
        const {id} = req.params;
        userId = id;
        const [resultado] = await conn.query("SELECT id, tarea, descripcion, fechainicio, fechafin FROM tasks WHERE usuarios_id = ?",[id]);
        //Tengo que extraer el id y retornarlo
        res.json(resultado);
    } catch (error) {
        return res.status(500).json({ message: "Algo esta Mal" });
    }
} 
export const gettask = async (req,res) => {
    try {
        const {id} = req.params;
        const [resultado] = await conn.query("SELECT id, tarea, descripcion, fechainicio, fechafin FROM tasks WHERE usuarios_id = ? AND id = ?",[userId, id]);
        res.json(resultado);
    } catch (error) {
        console.log(error);
    }
}

export const createtask = async (req, res) => {
    try {
        const {tarea, descripcion, fechainicio, fechafin} = req.body;
        if(!tarea){
            console.log("El campo 'tarea' no puede estar vacío o nulo.")
            return;
        }
        const [resultado] = await conn.query("INSERT INTO tasks(usuarios_id, tarea, descripcion, fechainicio, fechafin) VALUES(?,?,?,?,?)",[userId, tarea, descripcion, fechainicio, fechafin])
        res.json(resultado);
    } catch (error) {
        console.log(error);
    }
}

export const puttasks = async (req,res) => {
    try {
        const {id} = req.params;
        const { tarea, descripcion, fechainicio, fechafin } = req.body;
        const  [resultado] =await conn.query("UPDATE tasks SET tarea = ?, descripcion = ?, fechainicio = ?, fechafin = ? WHERE usuarios_id = ? AND id = ?", [tarea, descripcion, fechainicio, fechafin, userId, id]);
        res.json(resultado);
    } catch (error) {
        console.log(error);
    }
} 
export const deletetasks = async (req,res) => {
    try {
        const {id} = req.params;
        const [resultado] = await conn.query("DELETE FROM tasks WHERE id = ? AND usuarios_id = ?",[id, userId]);
        res.json(resultado);
    } catch (error) {
        console.log(error);
    }
} 