import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

export const LibrosP = () => {
  const navigate = useNavigate();

  const handleLibrosP = () => {
    navigate("/menu");
  };
  
  const handleHistorial = () => {
    navigate("/historial");
  };

  const [prestamosList, setPrestamos] = useState([]);

  useEffect(() => {
    getPrestamos();
  }, []);

  const getPrestamos = () => {
    Axios.get("http://localhost:3001/prestamos").then((response) => {
      setPrestamos(response.data);
      console.log(response.data);
    });
  };

  const handleDevolucion = async (idPrestamo) => {
    try {
      const response = await Axios.post('http://localhost:3001/actualizarEstado', {
        idPrestamo
      });

      console.log(response.data);
      getPrestamos(); // Actualizar la lista de préstamos después de la devolución
    } catch (error) {
      console.error('Hubo un error al actualizar el estado del préstamo:', error);
    }
  };

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
              <th scope="col">Nombre Libro</th>
              <th scope="col">Nombre Estudiante</th>
              <th scope="col">Carrera</th>
              <th scope="col">Correo electronico</th>
              <th scope="col">Fecha prestamo</th>
              <th scope="col">Fecha Limite</th>
              <th scope="col">Devolucion</th>
            </tr>
          </thead>
          <tbody>
            {prestamosList.length > 0 ? (
              prestamosList.map((val) => (
                <tr key={val.ID}>
                  <td>{val.NombreLibro}</td>
                  <td>{val.NombreEstudiante}</td>
                  <td>{val.Carrera}</td>
                  <td>{val.Correo}</td>
                  <td>{new Date(val.FechaPrestamo).toISOString().split('T')[0]}</td>
                  <td>{new Date(val.FechaLimite).toISOString().split('T')[0]}</td>
                <td className="textvolver Btn_librop">  
                  <button 
                    className="Btn_historial"
                    type="button"
                    onClick={() => handleDevolucion(val.ID)}
                  >
                    ✔
                  </button>
                </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="textvolver Btn_librop">
          <button className="Btn_librops"
          type="button"
          onClick={handleHistorial}
          >Historial</button>
        </div>
      </div>
    </div>
  );
};

export default LibrosP;
