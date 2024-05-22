import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const RegistrarLibro = () => {
const navigate = useNavigate();

const handleRegistrarLibro = () => {
  navigate('/libroD')
}

  return (
    <div>
      <div className="container containerLP">
        <div className=" textvolver">
          <button className="devolverM"
          onClick={handleRegistrarLibro}
          ></button>
          <h1 className="tituloLP">Registrar Libros</h1>
        </div>
        <form>
          <div className="row ">
            <div className="col">
              <label className="requisitos">Nombre del libro</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del libro"
              />
              <br></br>
              <label className="requisitos">Autor</label>
              <input
                type="text"
                className="form-control"
                placeholder="Autor"
              />
              <br></br>
              <div className="col">
                <label className="requisitos">Carrera</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Carrera"
                />
                <br></br>
              </div>
            </div>
            <div className="col">
              <label className="requisitos">Editorial</label>
              <input type="text" className="form-control" placeholder="Editorial" />
              <br></br>
              <div className="col">
                <label className="requisitos">Año</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Año"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="textvolver Btn_librop">
          <button className="Btn_libropss">Agregar Libro</button>
          <div />
        </div>
      </div>
    </div>
  );
}
