import React from 'react'
import "../App.css";
import { useNavigate } from 'react-router-dom';

export const LibroD = () => {
const navigate = useNavigate();

const handleLibroD = () => {
  navigate('/registrarLibro')
}
  const handleMenu = () => {
    navigate('/menu')

}



  return (
    <div>
      <div className="container containerLP">
        <div className=" textvolver">
          <button className="devolverM" 
          onClick={handleMenu} ></button>
          <h1 className="tituloLP">Lista Libros Disponibles</h1>
          <di className="buscarE">
            
            <input
              type="text"
              placeholder="Buscar Libro"
              className="buscar-estu"
            />

          </di>
        </div>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th>Nombre libro</th>
              <th>Editorial</th>
              <th>Autor</th>
              <th>Año</th>
              <th>Carrera</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Java Vl1</td>
              <td>Mark Linux</td>
              <td>Pinguino</td>
              <td>2014</td>
              <td>Sistemas</td>
            </tr>
          </tbody>
        </table>
        <div className="textvolver Btn_librop">
        <button 
        className="Btn_libropss"
        type="button"
        onClick={ handleLibroD}
        >Registrar Libro</button>
        <button className="Btn_librops">Editar</button>
        <button className="Btn_librops">Borrar</button>
        <button className="Btn_librops">Confirmar</button>


        </div>
      </div>
    </div>
  );
};
