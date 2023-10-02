CREATE DATABASE IF NOT EXISTS timetracker;

-- DROP DATABASE timetracker;

USE timetracker;


CREATE TABLE usuarios (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT "Llave primaria de la tabla usuarios",
                       correo VARCHAR(100) NOT NULL COMMENT "Campo para almacenar el correo del usuario")
COMMENT "Tabla para almacenar los usuarios de la app time tracker";


CREATE TABLE tasks(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT "Llave primaria de la tabla tasks",
				   usuarios_id INT NOT NULL COMMENT "Campo para poner el id del usuario",
				   tarea VARCHAR(30) NOT NULL COMMENT "Campo para almacenar el nombre de la tarea",
				   descripcion VARCHAR(250) NOT NULL COMMENT "Campo para almacenar la descripción de la tarea",
                   fechainicio DATE NOT NULL COMMENT "Campo para almacenar la fecha y hora de cuando incia la tarea",
                   fechafin DATE NOT NULL COMMENT "Campo para almacenar la fecha y hora de cuando se termine la tarea",
                   FOREIGN KEY (usuarios_id) REFERENCES usuarios(id))
COMMENT "Tabla para almacenar las tareas de un usuario de la app time tracker";
                   
				
                   
                   
SELECT * FROM usuarios;

SELECT * FROM tasks;
                   
                   
INSERT INTO usuarios(correo) VALUES("pablo@gmail.com");
INSERT INTO tasks (id, usuarios_id, tarea, descripcion, fechafin) VALUES ('1', '1', 'Cagar', 'Terminar', '2023-09-29 14:30:00');
                   
                   
