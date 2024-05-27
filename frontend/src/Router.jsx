import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreateGathering from "./pages/CreateGathering";
import Admin from "./pages/Admin";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/createGathering" element={<CreateGathering />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
}
