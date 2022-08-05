import React from 'react'
import { connect } from 'react-redux'
import CheckOutItem from '../check-out-items/CheckOutItem'
import './CheckOut.scss'
import { removeItem ,addItem ,decriseItem} from '../../redux/cart/Cart-action'
import StripeCheckoutButton from '../stripe-button/stripe-button.componenet'

const CheckOut = ({totale,cartItems,removeItem,addItem,decriseItem}) => {
  return (
    <div className='check-out-page'>
        <div  className='header'>
            <div className="title">image</div>
            <div className="title">detailes</div>
            <div className="title">price</div>
            <div className="title">quantity</div>
            <div className="title">remove</div>
        </div>
        <div className="items">
            {cartItems.map( cartItem => (<CheckOutItem decriseItem={decriseItem} addItem={addItem} removeItem={removeItem} key={cartItem.id} cartItem={cartItem}/>) )}
        </div>
        <div className="totale"> totale {totale}$</div>
        <StripeCheckoutButton price={totale} />

    
    
    
    </div>
  )
}

const mapStateToProps = ({cart :{cartItems}}) =>({
    totale: cartItems.reduce((acc,item)=> acc+ item.price*item.quantity ,0) ,
    cartItems 
})

const mapDispatchToProps = dispatch =>({
    removeItem:(id)=> dispatch(removeItem(id)) ,
    addItem:(item)=> dispatch(addItem(item)) ,
    decriseItem:(item)=> dispatch(decriseItem(item)) ,
   
    
})

export default connect(mapStateToProps,mapDispatchToProps)(CheckOut)