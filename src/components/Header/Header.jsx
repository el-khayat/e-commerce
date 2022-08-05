import React from 'react'
import "./Header.scss"
import {useSelector,useDispatch, connect} from 'react-redux'

import {NavLink,Link,useNavigate} from 'react-router-dom'
import { auth } from '../../firebase/firebase-utils'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CardIcon from '../Card-icon/CardIcon'
import CardDropdown from '../Card-dropdown/CardDropdown'


const Header = ({user}) => {
  const navigate = useNavigate()

  const currentUser = useSelector(state => state.user.currentUser)
  const state = useSelector(state => state)
  const hidden = useSelector(({cart}) => cart.hidden)
  const dispatch = useDispatch()


 
  const SingOut = ()=>{
    auth.signOut();
    navigate("/singin")
  }


  return (
<nav>
   <div className='logo'>
  <Link to='/'>
    <Logo/>
  </Link>
   </div>

   <div className='options'>
    <NavLink to='/shop'><div className='link'>shop</div></NavLink>
    <NavLink to='/contact'><div className='link'>Contact</div></NavLink>


{
  currentUser ?
  (<div className='link' onClick={SingOut}>sing out</div>)
  :
  (<NavLink to='/singin'><div className='link'>sing in</div></NavLink>)
  
}
    
  <div className='link'>
  <CardIcon/>
  </div>
  
     
   </div>
       {
        !hidden &&( <CardDropdown/>)
       }    
</nav>
  )
}


export default Header