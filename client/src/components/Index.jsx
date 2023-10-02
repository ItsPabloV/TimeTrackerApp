import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import {useUsers} from "../context/TaskContext.jsx";

const Index = () => {

    const {isAuthenticated} = useAuth0();

    const navigate = useNavigate();
    useEffect(() => {
        if(!isAuthenticated) {
            //navigate("/");
        } else {
            navigate("/TimeTasks");
        }
    });
    return(
        <div className="w-screen h-screen flex justify-center items-center">
        <img src="https://uploads-ssl.webflow.com/5dd3ac2a77520f09d34aa5b0/616ee4eb10d0188cf1c0773d_6%20Time%20Tracking%20Software%20Features%20That%20Matter%20Most%402x.png"alt="Foto relacionada con la administracion del tiempo"  className="w-full h-full object-cover"/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cornflower-700 bg-opacity-75 p-8 rounded-lg shadow-lg text-center text-black">
      <h2 className="text-2xl font-bold mb-4">¿Que es una Aplicación Time Tracker?</h2>
      <p className=' px-2 bg-cornflower-800 text-black rounded-lg'>Una aplicación Time Tracker es una herramienta que permite realizar un seguimiento del tiempo dedicado a diferentes tareas y proyectos. Estas aplicaciones son útiles para controlar el tiempo empleado en actividades laborales, proyectos personales o cualquier otra actividad que requiera un registro preciso del tiempo invertido.</p>
    </div>
        </div>
    )
}

export default Index;