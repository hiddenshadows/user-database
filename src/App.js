import {Button, Navbar, Nav, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import './App.css';

function App() {
  return (
    <div className="AppNav">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
