import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const LibrosP = () => {
  const navigate = useNavigate();

  const handleLibrosP = () => {
    navigate('/menu')
  }

  return (
    <div>
      <div className="container containerLP">
        <div className=" textvolver">
          <button className="devolverM" onClick={handleLibrosP}></button>
          <h1 className="tituloLP">Lista Libros Prestados</h1>
          <div className="buscarE">
            
            <input
              type="text"
              placeholder="Buscar Estudiante"
              className="buscar-estu"
            />

          </div>
        </div>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Cedula</th>
              <th>Carrera</th>
              <th>Correo electronico</th>
              <th>Nombre libro</th>

              <th>Fecha prestamo</th>
              <th>Fecha entrega</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ramon Ramirez Real</td>
              <td>100326548</td>
              <td>Sistemas</td>
              <td>ramonramirezreal10@gmail.com</td>
              <td>Java Vl1</td>
              <td>10/10/2020</td>
              <td>10/11/2020</td>
            </tr>
          </tbody>
        </table>
        <div className="textvolver Btn_librop">
        <button className="Btn_librops">Editar</button>
        <button className="Btn_librops">Borrar</button>
        <button className="Btn_librops">Confirmar</button>
        <button className="Btn_librops">Entregado</button>

        </div>
      </div>
    </div>
  );
};
export default LibrosP;
