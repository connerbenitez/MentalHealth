import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import Home from "./pages/Home.jsx";
import Add from "./pages/Add.jsx";
import View from "./pages/View.jsx";
import Logout from "./pages/Logout.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
// import './TemplateApp.css';

function App() {
  return (
    <BrowserRouter basename="/MentalHealth/MentalHealth-main/my-react-app/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<CreateAccount />} />

        {/* Protected Routes (So you can't type localhost/5173/view and see notes without logging in) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <Add />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view"
          element={
            <ProtectedRoute>
              <View />
            </ProtectedRoute>
          }
        />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
