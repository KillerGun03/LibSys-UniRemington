import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

export const LibroD = () => {
  const navigate = useNavigate();

  const handleLibroD = () => {
    navigate("/registrarLibro");
  };
  const handleMenu = () => {
    navigate("/menu");
  };

  const [librosList, setLibros] = useState([]);

  useEffect(() => {
    getLibros();
  }, []);

  const getLibros = () => {
    Axios.get("http://localhost:3001/Libros").then((response) => {
      setLibros(response.data);
      console.log(response.data)
    });
  };

  return (
    <div>
      <div className="container containerLP">
        <div className=" textvolver">
          <button className="devolverM" onClick={handleMenu}></button>
          <h1 className="tituloLP">Lista Libros Disponibles</h1>
          <div className="buscarE">
            <input
              type="text"
              placeholder="Buscar Libro"
              className="buscar-estu"
            />
          </div>
        </div>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              
              <th scope="col">Nombre libro</th>
              <th scope="col">Editorial</th>
              <th scope="col">Autor</th>
              <th scope="col">Carrera</th>
              <th scope="col">Cantidad Libros</th>
            </tr>
          </thead>
          <tbody>
          {librosList.length > 0 ? (
              librosList.map((val) => (
                <tr key={val.ID}>
                  <td>{val.TituloLibro}</td>
                  <td>{val.Editorial}</td>
                  <td>{val.Autor}</td>
                  <td>{val.CampoEstudio}</td>
                  <td>{val.Cantidad}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="textvolver Btn_librop">
          <button className="Btn_libropss" type="button" onClick={handleLibroD}>
            Registrar Libro
          </button>
          <button className="Btn_librops">Confirmar</button>
        </div>
      </div>
    </div>
  );
};
