import React from 'react';
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
 import HomePage from './pages/HomePage';



const  App  = () => {

  const Hats = ()=>{
    return <h1> helo from hats</h1>
  }

    return (
      <Router >
        <Routes>
          <Route exact path='/' element={<HomePage /> } />
          <Route exact path='/hats' element={<Hats /> } />
                  
        
        </Routes>
      </Router>
    );

}

export default App;
