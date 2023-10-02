import express from 'express';
import users from './routes/users.routes.js';
import index from './routes/tasks.routes.js';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();


app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(index);
app.use(users);

app.listen(3000);
console.log("Conectado a la base de datos MySQL");