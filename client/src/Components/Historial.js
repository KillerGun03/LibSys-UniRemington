import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

export const Historial = () => {
  const navigate = useNavigate();

  const handleLibrosP = () => {
    navigate("/LibrosP");
  };


  const [historialList, setHistorial] = useState([]);

  useEffect(() => {
    getHistorial();
  }, []);

  const getHistorial = () => {
    Axios.get("http://localhost:3001/historial").then((response) => {
      setHistorial(response.data);
      console.log(response.data);
    });
  };

  return (
    <div>
      <div className="container containerLP">
        <div className=" textvolver">
          <button className="devolverM" onClick={handleLibrosP}></button>
          <h1 className="tituloLP">Historial Libros</h1>
        </div>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">Nombre Libro</th>
              <th scope="col">Nombre Estudiante</th>
              <th scope="col">Carrera</th>
              <th scope="col">Correo electronico</th>
              <th scope="col">Fecha prestamo</th>
              <th scope="col">Fecha Entrega</th>
            </tr>
          </thead>
          <tbody>
            {historialList.length > 0 ? (
              historialList.map((val) => (
                <tr key={val.ID}>
                  <td>{val.NombreLibro}</td>
                  <td>{val.NombreEstudiante}</td>
                  <td>{val.Carrera}</td>
                  <td>{val.Correo}</td>
                  <td>{val.FechaPrestamo}</td>
                  <td>{val.FechaEntrega}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};
export default Historial;
