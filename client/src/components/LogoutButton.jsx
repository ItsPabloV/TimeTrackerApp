import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, user } = useAuth0();

  return (
    <div className="flex items-center">
      <div className="px-10"></div>
  <img
    src={user.picture}
    alt={user.name}
    className="w-8 h-8 rounded-full mr-2"
  />
  
  <span className="text-white mr-4 font-medium">{user.name}</span>
  <button onClick={() => {logout()}} className="bg-white text-cornflower-500 px-4 py-2 rounded-full">Logout</button>
</div>
  )
};

export default LogoutButton;
