import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams, useNavigate } from 'react-router-dom';

function TaskForm() {
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechainicial, setFechainicio] = useState(null);
  const [fechafinal, setFechafin] = useState(null);
  const params = useParams();
  const { createTask, editTask, getTask } = useContext(TaskContext);
  const navigate = useNavigate();

  useEffect(()  => {
    if (params.id) {
       getTask(params.id)
        .then(task => {
          if (task) {
            w();
          }
        })
        .catch(error => {
          console.error('Error al obtener la tarea:', error);
        });
    }
  }, [params.id, getTask]);
 

  const w = async () => {
    const task = await getTask(params.id); 
    setTarea(task.data[0].tarea);
    setDescripcion(task.data[0].descripcion);
    setFechainicio(new Date(task.data[0].fechainicio));
    setFechafin(new Date(task.data[0].fechafin));
  }
  
  
  const handleDateInicioChange = (fechainiciald) => {
    setFechainicio(fechainiciald);
  };

  const handleDateFinalChange = (fechafinald) => {
    setFechafin(fechafinald);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const fechainicio = fechainicial.toISOString().slice(0, 19).replace("T", " ");
    const fechafin = fechafinal.toISOString().slice(0, 19).replace("T", " ");
    if (params.id) {
      await editTask(params.id, {
        tarea,
        descripcion,
        fechainicio,
        fechafin
      });
    } else {
      await createTask({
        tarea,
        descripcion,
        fechainicio,
        fechafin
      });
    }
    setTarea("");
    setDescripcion("");
    setFechainicio(null);
    setFechafin(null);
    navigate("/TimeTasks");
    window.location.reload();
  };

  return (
    <div className="bg-slate-600 py-20 w-screen h-screen">
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-xl">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu Tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTarea(e.target.value)}
          value={tarea}
          className="bg-slate-300 p-3 w-full mb-2 rounded-xl"
          autoFocus
        />
        <textarea
          placeholder="Ingresa mas informacion"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2 rounded-xl"
        >
          Descripcion
        </textarea>
        <div>
          <h2 className="py-1 font-medium items-center text-center">Fecha y Hora que inicia la tarea</h2>
          <div className="flex justify-center mb-2">
          <DatePicker
            placeholder="Fecha incial"
            selected={fechainicial}
            onChange={handleDateInicioChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy/MM/dd h:mm aa"
            minDate={new Date()}
            className="bg-slate-300 p-3 w-full mb-2 mx-auto rounded-xl"
          />
          </div>
        </div>
        <div>
          <h2 className="py-1 font-medium text-center">Fecha y Hora que finaliza la tarea</h2>
          <div className="flex justify-center mb-2">
          <DatePicker
            placeholder="Fecha final"
            selected={fechafinal}
            onChange={handleDateFinalChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy/MM/dd h:mm aa"
            minDate={new Date()}
            className="bg-slate-300 p-3 w-full mb-2 mx-auto rounded-xl"
          />
          </div>
        </div>
        <div className="flex justify-center mb-2">
          <button type="submit" className="bg-indigo-500 px-3 py-1 text-white rounded-xl">Guardar</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default TaskForm;