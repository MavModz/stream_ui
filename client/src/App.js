import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/register" Component={Register} />
      </Routes>
    </div>
  );
}

export default App;
