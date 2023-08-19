import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/dashboard" Component={Dashboard}/>
      </Routes>
    </div>
  );
}

export default App;
