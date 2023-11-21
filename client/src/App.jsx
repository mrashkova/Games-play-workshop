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

  const values = {
    loginSubmitHandler,
    email: auth.email,
    username: auth.username,
    isAuthenticated: !!auth.username,
  };

  return (
    <AuthContext.Provider value={values}>
      <div id="box">
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Catalogue} element={<Catalogue />} />
          <Route path={Path.Create} element={<Create />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.GameDetails} element={<GameDetails />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
