
import React from 'react'
import '../App.css';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
const navigate = useNavigate();
const location = useLocation();

const handleSalir = () =>{
  navigate('/login')
}

const mostrarBotonSalir = location.pathname !== '/login';

return (

    <Navbar className="custom-header" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <div className="logo"></div>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ color: '#004AAD' }} className='textoH'>
            Hola!
          </Navbar.Text>
          {mostrarBotonSalir && (
          <Button 
          className="ml-2"
          onClick={handleSalir}
          >Salir</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}
