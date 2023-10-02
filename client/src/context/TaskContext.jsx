import { createContext,useContext, useState, useEffect } from "react";
import axios from "axios";


export const TaskContext = createContext();

export const useUsers = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("No se puede utilizar esta funcion si estas afuera del contexto");
  }
  return context;
};

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [user, setUserId] = useState(0);

  const registerUser = async (correo) => {
    try {
      const data = {
        correo: correo
      };
      const response = await axios.post("http://localhost:3000/register",data);
      return response;
    } catch (_) {
    }
  }
  const getUser = async (correo) => {
    try {
      const data = {
        correo: correo
      };
      const response = await axios.get("http://localhost:3000/user/"+correo);
      setUserId(response.data[0].id);
      return response.data[0].id;
    } catch (error) {
      console.log(error)
    }
  }

  const ViewTasks = async (id) => {
    try {
      const response = await axios.get("http://localhost:3000/tasks/"+id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const createTask = async (task) => {
    try {
      const data = {
        tarea: task.tarea,
        descripcion: task.descripcion,
        fechainicio: task.fechainicio,
        fechafin: task.fechafin
      }
      setTasks([...tasks,data]);
      const response = await axios.post("http://localhost:3000/task/create",data);
      return response;
    } catch (error) {
      console.error('Error al insertar la tarea:', error);
    }
  }

  const editTask = async (taskId, task) => {
    try {
      const data = {
        tarea: task.tarea,
        descripcion: task.descripcion,
        fechainicio: task.fechainicio,
        fechafin: task.fechafin
      }
      const response = await axios.put("http://localhost:3000/task/update/"+taskId, data);
      tasks.find((task) => task.id === taskId);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  const getTask = async (id) => {
    try {
      const response = await axios.get("http://localhost:3000/task/"+id)
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete("http://localhost:3000/task/delete/"+taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
      return response;
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  }

  useEffect(() => {
    ViewTasks(user)
      .then((tasksData) => {
        setTasks(tasksData);
      })
      .catch((error) => {
        console.error('Error al obtener tareas:', error);
      });
    }, [user]); 

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        ViewTasks,
        registerUser,
        getUser,
        user,
        editTask,
        getTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}