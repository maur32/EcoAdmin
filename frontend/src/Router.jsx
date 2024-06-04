import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreateGathering from "./pages/CreateGathering";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import Gathering from "./pages/Gathering";

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home itemsPerPage={20} />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/register" element={<RegisterAndLogout />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/createGathering"
        element={
          <ProtectedRoute>
            <CreateGathering />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/gathering/:id"
        element={
          <ProtectedRoute>
            <Gathering />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}
