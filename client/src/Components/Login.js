import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/validarUsuario",
        {
          nombreUsuario,
          contrasena,
        }
      );

      if (response.data === 'usuario validado') {
        navigate('/menu');
      } else {
        alert('Usuario no validado');
      }
    } catch (error) {
      console.error('Hubo un error al iniciar sesión:', error);
    }
  };

  return (
    <section className="vh-100" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <div className="img-fluid"></div>
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3"> </i>
                        <span className="h1 fw-bold mb-0" style={{ color: '#004AAD' }}>¡BIENVENIDO!</span>
                      </div>

                      <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example17" >Usuario</label>
                      <input 
                        type="email" 
                        id="form2Example17"  
                        className="form-control form-control-lg"
                        onChange={e => setNombreUsuario(e.target.value)}
                      />

                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example27" >Contraseña</label>
                      <input 
                        type="password" 
                        id="form2Example27"  
                        className="form-control form-control-lg" 
                        onChange={e => setContrasena(e.target.value)}
                      />
                      </div>
                      <div className="pt-1 mb-4">
                      <button  
                        className="cambiar-but" 
                        type="button"
                        onClick={handleLogin}
                      >
                        Ingresar
                      </button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
