import "./App.css";
import "./index.css";
import "./index";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import Login from "./Components/Login";
import { Menu } from "./Components/Menu"; 
import { LibrosP } from "./Components/LibrosP"; 
import { RegistroLibroPres } from "./Components/RegistroLibroPres";
import { LibroD } from "./Components/LibroD";
import { RegistrarLibro } from "./Components/RegistrarLibro";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/librosP" element={<LibrosP />} />
        <Route path="/registroLibroPres" element={<RegistroLibroPres />} />
        <Route path="/libroD" element={<LibroD />} />
        <Route path="/registrarLibro" element={<RegistrarLibro />} />
      </Routes>

    </div>
  );
}

export default App;
