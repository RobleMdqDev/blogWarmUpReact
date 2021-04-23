
import './App.css';
import Router from './Router';

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

import UserContext from './contexts/usercontext/UserContext';  

function App() {

  const [user, setUser] = useState("");
  console.log(user);
  const [viewLogin, setViewLogin] = useState();


  return (
    <div className="App">
        <UserContext.Provider value={{setUser, user, setViewLogin}}>
          <Router />
          {viewLogin}
        </UserContext.Provider>      
    </div>
  );
}

export default App;
