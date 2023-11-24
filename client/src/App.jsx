import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalogue from "./components/Catalogue/Catalogue";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/logout/logout";
import GameDetails from "./components/Catalogue/GameItem/GameDetails";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");

    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});

    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthProvider value={values}>
      <div id="box">
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Catalogue} element={<Catalogue />} />
          <Route path={Path.Create} element={<Create />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.GameDetails} element={<GameDetails />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
