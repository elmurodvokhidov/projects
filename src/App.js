import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";

function App() {
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
