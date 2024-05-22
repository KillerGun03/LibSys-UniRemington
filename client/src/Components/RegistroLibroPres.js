import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const RegistroLibroPres = () => {
  const navigate = useNavigate();

  const handleRegistroLibroPres = () => {
    navigate("/menu");
  };

  return (
    <div>
      <div className="container containerLP">
        <div className=" textvolver">
          <button
            className="devolverM"
            onClick={handleRegistroLibroPres}
          ></button>
          <h1 className="tituloLP">Registro de Prestamo de Libros</h1>
        </div>
        <form>
          <div className="row ">
            <div className="col">
              <label className="requisitos">Nombres</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Completo"
              />
              <br></br>
              <label className="requisitos">Correo electronico</label>
              <input type="text" className="form-control" placeholder="Email" />
              <br></br>
              <label className="requisitos">Nombre del Libro</label>
              <input
                type="number"
                className="form-control"
                placeholder="Nomre del libro"
              />
            </div>
            <div className="col">
              <label className="requisitos">Numero Documento</label>
              <input
                type="number"
                className="form-control"
                placeholder="Cedula"
              />
              <br></br>
              <label className="requisitos">Programa de formacion</label>
              <input
                type="text"
                className="form-control"
                placeholder="Carrera universitaria"
              />
            </div>
          </div>
        </form>
        <div className="textvolver Btn_librop">
          <button className="Btn_libropss">Registrar prestamo</button>
          <div />
        </div>
      </div>
    </div>
  );
};
