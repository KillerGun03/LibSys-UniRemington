import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import  Axios  from "axios";
import Swal from 'sweetalert2';

export const RegistrarLibro = () => {
const navigate = useNavigate();

const handleRegistrarLibro = () => {
  navigate('/libroD')
}

const [tituloLibro,setTituloLibro] = useState("");
const [editorial,setEditorial] = useState("");
const [autor,setAutor] = useState("");
const [fecha,setFecha] = useState("");
const [campoEstudio,setCampoEstudio] = useState("");
const [cantidad,setCantidad] = useState(0);

const add = () => {
  Axios.post("http://localhost:3001/addLibro", {
    tituloLibro:tituloLibro,
    editorial:editorial,
    autor:autor,
    fecha:fecha,
    campoEstudio:campoEstudio,
    cantidad:cantidad
}).then(() => {
  
  limpiarCampos();
  Swal.fire({
    title: "<strong>Registro bueno</strong>",
    html: "<i> El usuario <Strong>"+tituloLibro+"</Strong> fue registrado !</i>",
    icon: 'success',
    timer:null,
    showConfirmButton: true 
  })
})

.catch(error => {
  Swal.fire({
    title: 'Error',
    text: 'Hubo un problema al registrar el préstamo.',
    icon: 'error',
    timer: 5000
  });
});
};

const limpiarCampos = ()=>{
  setTituloLibro("");
  setEditorial("");
  setAutor("");
  setFecha("");
  setCampoEstudio("");
  setCantidad("");
};



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
                onChange={(event)=>{
                  setTituloLibro(event.target.value);
                }}
                className="form-control"
                placeholder="Nombre del libro"
                value={tituloLibro}
              />
              <br></br>
              <label className="requisitos">Editorial</label>
              <input
                type="text"
                onChange={(event)=>{
                  setEditorial(event.target.value);
                }}
                className="form-control"
                placeholder="editorial"
                value={editorial}
              />
              <br></br>
              <div className="col">
                <label className="requisitos">Autor</label>
                <input
                  type="text"
                  onChange={(event)=>{
                    setAutor(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Autor"
                  value={autor}
                />
                <br></br>
              </div>
            </div>

            <div className="col">
              <label className="requisitos">Fecha</label>
              <input type="date" 
              onChange={(event)=>{
                setFecha(event.target.value);
              }}
              className="form-control" placeholder="Editorial" value={fecha} />
              <br></br>
              <div className="col">
                <label className="requisitos">Carrera </label>
                <input
                  type="text"
                  onChange={(event)=>{
                    setCampoEstudio(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Carrera Universitaria"
                  value={campoEstudio}
                />
              </div>
              <br></br>
              <div className="col">
                <label className="requisitos">Cantidad de Libros</label>
                <input
                  type="number"
                  onChange={(event)=>{
                    setCantidad(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Cantidad"
                  value={cantidad}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="textvolver Btn_librop">
          <button className="Btn_libropss" onClick={add}>Agregar Libro</button>
          <div />
        </div>
      </div>
    </div>
  );
}
