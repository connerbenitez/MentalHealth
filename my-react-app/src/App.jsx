import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx'; 
import Home from './pages/Home.jsx'; 
import Add from './pages/Add.jsx'; 
import View from './pages/View.jsx'; 
import Logout from './pages/Logout.jsx';
import './App.css';
// import './TemplateApp.css';
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
