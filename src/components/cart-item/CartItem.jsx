import React from 'react'
import './CartItem.scss'


const CartItem = ({item:{name,imageUrl,price,quantity}}) => {
  return (
    <div className='cart-item'>
        <div className="image-item">
            <img src={imageUrl} alt="item" />
        </div>
        <div className="detailes-item">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
  )
}

export default CartItem