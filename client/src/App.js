import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Sidebar from './Components/Sidebar/Sidebar';
import Maps from "./pages/Maps/Maps";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={Login}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/register" Component={Register} />
        <Route path="/sidebar" Component={Sidebar} />
        <Route path="/maps" Component={Maps} />
      </Routes>
    </div>
  );
}

export default App;
