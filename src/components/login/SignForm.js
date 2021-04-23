import React from 'react'
import "./login.css";

const SignForm = ({form, login, mood})=>{
   
    const handleLogin =(e)=>{
        e.preventDefault();
        login(e);
    };
    
    return (
      <div className='formulario login-dark'>
        <form
          id='login'
          onChange={form}
          onSubmit={(e) => {
            handleLogin(e);
          }}>
          <h3>Sign Up!</h3>
          <hr className='bg-light' />
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              name='name'
              autoComplete='off'
              placeholder='Usuario'
            />
          </div>

          <div className='input-group mb-3'>
            <input
              type='email'
              className='form-control'
              name='email'
              autoComplete='off'
              placeholder='E-mail'
            />
          </div>

          <div className='input-group mb-3'>
            <input
              type='password'
              className='form-control'
              name='pass'
              autoComplete='off'
              placeholder='Password'
            />
          </div>

          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              name='phone'
              autoComplete='off'
              placeholder='Telefono'
            />
          </div>

          <div className='form-group'>
            <button className='btn btn-primary btn-block' type='submit'>
              Confirm
            </button>
          </div>

          <a
            href='#/'
            onClick={() => {
              mood("/login");
            }}>
            Sign In!
          </a>
        </form>
      </div>
    );
}

export default SignForm