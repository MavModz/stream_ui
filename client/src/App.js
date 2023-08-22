import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/sidebar" Component={Sidebar}/>
        <Route path="/dashboard" Component={Dashboard} />

              </Routes>
    </div>
  );
}

export default App;
