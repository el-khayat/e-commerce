import React from 'react'
import "./Header.scss"
import {NavLink,Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/crown.svg'



const Header = () => {
  
  return (
<nav>
   <div className='logo'>
  <Link to='/'>
    <Logo/>
  </Link>
   </div>
   <div className='options'>
    <NavLink to='/shop'><div className='link'>shop</div></NavLink>
    <NavLink to='/singup'><div className='link'>sing up</div></NavLink>
    <NavLink to='/singin'><div className='link'>sing in</div></NavLink>
    <NavLink to='/contact'><div className='link'>Contact</div></NavLink>
   <div className='link'> pan</div>
     
     
     
     
     
   </div>
</nav>
  )
}

export default Header