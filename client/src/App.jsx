import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";
import Path from "./paths";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalogue from "./components/Catalogue/Catalogue";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/Catalogue/GameItem/GameDetails";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
  };

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Catalogue />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/:gameId/details" element={<GameDetails />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
