import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter as Router ,Route,Routes ,Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './components/Shop/Shop';
import SinginAndSingUp from './pages/SinginAndSingUp/SinginAndSingUp';
import Header from './components/Header/Header';
import './App.scss'
import { auth ,createProfile} from './firebase/firebase-utils';
import {setCurrentUser} from './redux/user/user-actions'
import { connect } from 'react-redux';
import CheckOut from './pages/CheckOut/CheckOut';
import CategoryPage from './pages/CategoryPage/CategoryPage';



class  App  extends Component {

  unsubscriber = null ;

 componentDidMount(){
  const { setCurrentUser} = this.props ;

   this.unsubscriber =   auth.onAuthStateChanged(async User=>{
        
            if (User) {

              const userRef = await  createProfile(User);
              setCurrentUser(userRef);
              
            }else{

              setCurrentUser(User);
            }
      
})

// end componentdidamout
      }

  componentWillUnmount(){
    this.unsubscriber();
  }



  render(){

    return (
      <>
      <Router  >

      <Header user={this.props.currentUser} onclick={ ()=>(somedata)=>console.log("user is  ",somedata)} />
        <Routes>
          <Route exact path='/' element={<HomePage /> } />
          
          <Route exact path='/shop' element={<ShopPage /> } >
            <Route  path=':CategoryId' element={<CategoryPage /> } />
          </Route>
       
          
          <Route exact path='/checkout' element={<CheckOut /> } />
          
          {
           Boolean(this.props.currentUser)  ?
            (<Route exact path='/singin' element={<Navigate to="/" />} />)   
            :
            (<Route exact path='/singin' element={<SinginAndSingUp /> } />)
          }
        
        </Routes>
      </Router>
      </>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
