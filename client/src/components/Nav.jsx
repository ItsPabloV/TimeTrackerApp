import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton.jsx";
import LoginButton from "./LoginButton.jsx";
import { Link } from 'react-router-dom'; 

const Nav = () => {
    const { isAuthenticated } = useAuth0();
    return(
        <nav className="bg-cornflower-500 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-black font-bold text-2xl">Time Tracker App</div>
            <div className="flex space-x-4">
            {
              
                isAuthenticated ? (<><Link to="/add-task"className="bg-white text-cornflower-500 px-5 py-2 rounded-full">Agregar Tarea</Link><LogoutButton /> </>):( <LoginButton/>)
            }
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Nav;
