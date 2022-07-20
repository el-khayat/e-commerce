import React from 'react';
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import SinginAndSingUp from './pages/SinginAndSingUp/SinginAndSingUp';
import Header from './components/Header/Header';
import './App.scss'

const  App  = () => {



    return (
      <>
      <Router >
      <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage /> } />
          <Route exact path='/shop' element={<ShopPage /> } />
          <Route exact path='/singin' element={<SinginAndSingUp /> } />
                  
        
        </Routes>
      </Router>
      </>
    );

}

export default App;
