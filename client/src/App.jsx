import Profile from "./components/Profile.jsx";
import { Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "./components/Nav.jsx";
import Index from "./components/Index.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  const { isLoading } = useAuth0();

  if(isLoading){
    return(
      <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      <div className="ml-4 text-xl font-bold text-gray-900">Cargando...</div>
    </div>
    ) 
  } 
  
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">
      <TaskContextProvider>
      <Nav/>
      <Routes>
        <Route path="/" element= {<Index/>}/>
        <Route path="/TimeTasks" element = {<Profile/>}/>
        <Route path="/add-task" element = {<TaskForm/>}/>
        <Route path='/tasks/:id' element = {<TaskForm/>}/>
      </Routes>
      </TaskContextProvider>
    </div>
  );
}

export default App;
