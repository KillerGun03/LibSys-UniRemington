import React from "react";
import "../App.css";
import { useNavigate } from 'react-router-dom';



export const Menu = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path)
      }



  return (
    <div className="containerM">
      <div className="row rowMenu ">
        <div className="col coll order-first">
          <ul></ul>
          <h1 className="nombreMenu"> Libros </h1>
          <h1 className="nombreMenu">Prestados</h1><br></br>
          <br></br>
          <button 
          className="firstB"
          type="button"
          onClick={() => handleNavigate('/LibrosP')}
          ></button>
        </div>
        <div className="col coll order-medio">
          <ul></ul>
          <h1 className="nombreMenu"> Registrar Libro</h1>
          <h1 className="nombreMenu"> Prestado</h1><br></br>
          <button 
          className="medioB"
          type="button"
          onClick={() => handleNavigate('/RegistroLibroPres')}
          ></button>
        </div>

        <div className="col coll last">
          <ul></ul>
          <h1 className="nombreMenu"> Libros </h1>
          <h1 className="nombreMenu"> Disponibles</h1>
          <button 
          className="lastB"
          type="button"
          onClick={() => handleNavigate('/LibroD')}
          ></button>
        </div>
      </div>
    </div>
  );
};
