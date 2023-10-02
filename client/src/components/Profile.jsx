import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";
import { useUsers } from "../context/TaskContext.jsx";


const Profile = () => {
    const {isAuthenticated, user} = useAuth0();
    const {registerUser, getUser} = useUsers();
    const res = user;
    let ban = false;
    let resultuser;


    useEffect(() => {
    const resultid = async () => {
        try {
            const resultuserid = await getUser(res.email);
            resultuser = resultuserid;
        } catch (error) {
            console.log("Error al obtener los datos:", error);
        }
    };
    resultid();
    
    const interval = setInterval(resultid, 1000);
    
    return () => {
      clearInterval(interval);
    };
    }, []);
    useEffect(() => {
        if(!ban){
            const register = async () => {
                try {
                    const result = await registerUser(res.email);
                } catch (error){
                    console.log('Error al obtener los datos:', error);
                }
            };
            register();
            ban =true;
        }
    },[])
 
    return (
        isAuthenticated && (
        <div className="bg-cornflower-400 w-screen h-screen m-0 p-4">
            <TaskList/>
        </div>
        )
    )
}

export default Profile;