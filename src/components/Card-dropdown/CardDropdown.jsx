import React from 'react'
import './CardDropdown.scss'
import FormButon from '../form-butom/FormButon'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {ToggeleDropDown} from '../../redux/cart/Cart-action'

const CardDropdown = ({cartItems,hidden}) => {
  const navigate  =useNavigate()
  return (
    <div className='card-dropdown'>
        <div className="catd-items">
        {
          cartItems.length > 0 ?
          cartItems.map( item => <CartItem key={item.id} item={item}/> )
            :
            <span className='no-item'> no item selected</span>
        }
        </div>
        <FormButon onClick={()=> {
          hidden()
          navigate("/checkout")
          }}> GO TO CHECKOUT</FormButon>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
 
  hidden :()=> dispatch(ToggeleDropDown())

})
const mapStateToProps = ({cart:{cartItems}})=>({
  cartItems 
})

export default connect(mapStateToProps,mapDispatchToProps)(CardDropdown)