import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from 'react-router-dom';

function TaskCard({ task }) {
  const { deleteTask, editTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md border-2 border-white">
      <h1 className="text-xl font-bold capitalize mb-2">{task.tarea}</h1>
      <p className="text-gray-500 text-sm mb-4">{task.descripcion}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-2 border-white p-2">
          <h2 className="text-center font-serif text-stone-700">Fecha Inicial</h2>
          <p className="text-white font-semibold">{task.fechainicio}</p>
        </div>
        <div className="border-2 border-white p-2">
          <h2 className="text-center font-serif text-stone-700">Fecha Final</h2>
          <p className="text-white font-semibold">{task.fechafin}</p>
        </div>
      </div>
      <button
        className="bg-red-500 px-4 py-2 rounded-md mr-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
      <Link to ={`/tasks/${task.id}`}
        className="bg-amber-400 px-4 py-2 rounded-md hover:bg-orange-400"
      >
        Editar Tarea
      </Link>
    </div>
  );
}

export default TaskCard;
