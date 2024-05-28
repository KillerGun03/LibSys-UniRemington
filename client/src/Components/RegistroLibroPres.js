import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import  Axios  from 'axios';
import Swal from 'sweetalert2';
import { useState } from "react";


export const RegistroLibroPres = () => {
  const navigate = useNavigate();

  const handleRegistroLibroPres = () => {
    navigate("/menu");
  };


  const [cedula,setCedula] = useState("");
  const [nombreCompleto,setNombreCompleto] = useState("");
  const [carrera,setCarrera] = useState();
  const [correo,setCorreo] = useState("");
  const [numero,setNumero] = useState("");
  const [tituloLibro,setTituloLibro] = useState("");




  const add = ()=>{
    Axios.post("http://localhost:3001/addPrestamo", {
      nombreCompleto:nombreCompleto,
      cedula:cedula,
      carrera:carrera,
      correo: correo,
      numero: numero,
      tituloLibro:tituloLibro

    }).then(()=>{

      limpiarCampos();
      Swal.fire({
        title: "<strong>Registro bueno</strong>",
        html: "<i> El usuario <Strong>"+nombreCompleto+"</Strong> fue registrado !</i>",
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
    setCedula("");
    setNombreCompleto("");
    setCarrera("");
    setCorreo("");
    setNumero("");
    setTituloLibro("");
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
              <label className="requisitos">Cedula</label>
              <input
                type="number"
                onChange={(event)=>{
                  setCedula(event.target.value);
                }}
                className="form-control" value={cedula}
                />
                
              <br></br>
              <label className="requisitos">Nombre Completo</label>
              <input 
              type="text" 
              onChange={(event)=>{
                setNombreCompleto(event.target.value);
              }}
              className="form-control" value={nombreCompleto} placeholder="nombre completo" />
              <br></br>
              <label className="requisitos">Carrera</label>
              <input
                type="text"
                onChange={(event)=>{
                  setCarrera(event.target.value);
                }}
                className="form-control" value={carrera}
                placeholder="Carrera"
              />
            </div>
            <div className="col">
              <label className="requisitos">Correo electronico</label>
              <input
                type="text"
                onChange={(event)=>{
                  setCorreo(event.target.value);
                }}
                className="form-control" value={correo}
                placeholder="Correo"
              />
              <br></br>
              <label className="requisitos">Celular</label>
              <input
                type="number"
                onChange={(event)=>{
                  setNumero(event.target.value);
                }}
                className="form-control" value={numero}
                placeholder="Telefono"
              />
              <br></br>
              <label className="requisitos">Titulo Nombre </label>
              <input
                type="text"
                onChange={(event)=>{
                  setTituloLibro(event.target.value);
                }}
                className="form-control" value={tituloLibro}
                placeholder="Carrera universitaria"
              />
            </div>
          </div>
        </form>
        <div className="textvolver Btn_librop">
          <button className="Btn_libropss" onClick={add}>Registrar prestamo</button>
          
          <div />
        </div>
      </div>
    </div>
  );
};
