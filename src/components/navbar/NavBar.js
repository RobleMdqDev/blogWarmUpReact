import React, { useContext } from "react";

// Estilos CSS
import "./navbar.css";
import FontAwesome from "react-fontawesome";

// Bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Login from '../login/Login';

import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/usercontext/UserContext";



export default function NavBar() {

  const {setViewLogin, user} = useContext(UserContext);

  return (
    <>
      <Navbar
        collapseOnSelect
        sticky='top'
        className='navbar'
        expand='lg'
        bg='dark'
        variant='dark'>
        <NavLink exact path to={`/`} className='brand'>
          <Navbar.Brand>
              Warm-Up Blog 
          </Navbar.Brand>
        </NavLink>
        <NavLink exact path to={`/new`} className='plus'>
          <span><FontAwesome name="plus" className='plus-icon'/></span>          
        </NavLink>
        <Navbar.Toggle variant="light" aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='nav-link'>

            <NavLink exact path to={`/`} activeClassName='currentCategory'>
              Home
            </NavLink>

            <NavLink to={'#'}                           
                              
                onClick={()=>{setViewLogin(<Login />)}}
                >              
                <FontAwesome name="user" className='user mr-2' />
                {user.name}
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
