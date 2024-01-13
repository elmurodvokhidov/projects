import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./slice/authslice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUser() {
      try {
        axios.interceptors.request.use(config => {
          config.headers.Authorization = localStorage.getItem("token") ? `Token ${localStorage.getItem("token")}` : "";
          return config
        });
        const { data } = await axios.get("https://api.realworld.io/api/user");
        dispatch(loginSuccess(data.user));
      } catch (error) {
        console.log(error);
      }
    };

    if (localStorage.getItem("token")) {
      getUser();
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
