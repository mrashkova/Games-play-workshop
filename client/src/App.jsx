import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalogue from "./components/Catalogue/Catalogue";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
