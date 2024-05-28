
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";


export const LibrosP = () => {
  const navigate = useNavigate();

  const handleLibrosP = () => {
    navigate('/menu')
  }


  const [usuariosList,setUsuarios] = useState([]);


useEffect (() =>{

  const getUsuarios = async ()=>{
    try {
      const response = await Axios.get("http://localhost:3001/prestamos");
        setUsuarios(response.data);
    } catch (error) {
      console.error("Error en getUsuarios:", error);
    }

  };
  
  getUsuarios();
}, []);

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
              <th scope="col" >Nombres</th>
              <th scope="col" >Cedula</th>
              <th scope="col" >Carrera</th>
              <th scope="col" >Correo electronico</th>
              <th scope="col" >Nombre libro</th>
              <th scope="col" >Fecha prestamo</th>
              <th scope="col" >Fecha entrega</th>
            </tr>
          </thead>
          <tbody>
            {
          usuariosList.map((val,key)=>{
            return <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.cedula}</td>
              <td>{val.nombreCompleto}</td>
              <td>{val.correo}</td>
              <td>{val.tituloLibro}</td>
              <td>{val.fechaPretamo}</td>
              <td>{val.fechaLimite}</td>
            </tr>
          })
        }
          </tbody>
        </table>
        <div className="textvolver Btn_librop">

        <button className="Btn_librops">Confirmar</button>
        <button className="Btn_librops">Entregado</button>

        </div>
      </div>
    </div>
  );
};
export default LibrosP;