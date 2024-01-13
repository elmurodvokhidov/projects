import { useContext } from "react";
import { ContextData } from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Admin from "./pages/Admin";

function App() {
  const { info } = useContext(ContextData);
  console.log(info);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;