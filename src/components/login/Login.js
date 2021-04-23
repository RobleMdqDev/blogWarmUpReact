import React, { useContext, useEffect, useState } from "react";

import LoginForm from "./LoginForm";
import SignForm from "./SignForm";
import "./login.css";
import { Button } from "react-bootstrap";
import UserContext from "../../contexts/usercontext/UserContext";



export default function Login() {

  //HOOK PARA LOGIN CONTEXT
  const {setUser, user, setViewLogin} = useContext(UserContext);

  //HOOK PARA ESTADO DE FORMULARIO
  const [formMood, setFormMood] = useState("/login");

  // HOOK PARA INICIAR SESIÓN

  const [loginForm, setLoginForm] = useState({
    name: "",
    pass: ""
  });

  // HOOK PARA REGISTRO

  const [signForm, setSignForm] = useState({
    name: "",
    email: "",
    pass: "",
    phone: ""
  });

  
  // CAPTURAMOS CAMBIOS EN MOOD

  const handleMood = (e) => {
    setFormMood(e);
    
  };

  // CAPTURAR CAMBIOS DEL FORMULARIO

  const handleForm = (e) => {
    if (formMood === "/login") {
      setLoginForm({
        ...loginForm,
        [e.target.name]: e.target.value,
      });
    } else {
      setSignForm({
        ...signForm,
        [e.target.name]: e.target.value,
      });
      
    }
    console.log(loginForm)
  };
 
  const handleLogin = (e) => {
    e.preventDefault();

    if (formMood === "/login") {
      setUser({...loginForm})
      setViewLogin();       
    }else{
    
    }

    // document.querySelector("form").reset();   
  };

  // HOOK que contiene el formulario
  const [form, setForm] = useState();

  let query = {};

  if (formMood === "/login") {
    query = loginForm;
  } else {
    query = signForm;
  }

  useEffect(() => {
    if (formMood === "/login") {
      setForm(
        <LoginForm
          form={handleForm}
          login={handleLogin}
          mood={handleMood}
         
        />
      );
    } else {
      setForm(
        <SignForm
          form={handleForm}
          login={handleLogin}
          mood={handleMood}
          
        />
      );
    }
  }, [formMood, query]);

  

  return (
       
    <div className='login'>
      
      {form}
      <Button variant="info" value='X' className="modalLogin" onClick={(e) => setViewLogin()}>
        X
      </Button>
    </div>
 
      
    
  );
}


