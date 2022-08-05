import React from 'react'
import './CheckOutItem.scss'


const CheckOutItem = ({cartItem,removeItem,addItem,decriseItem}) => {
  const {imageUrl,price,quantity,name,id} = cartItem
  return (
    <div className='checkout-item '>
        <div className="image-container">
            <img src={imageUrl} alt="" />
        </div>
        <div className='name'>{name}</div>
        <div className='price'> {price}$</div>
        <div className='quantity'>
          <span onClick={()=>decriseItem(cartItem)} > - </span>
           {quantity} 
          <span  onClick={()=>addItem(cartItem)}> + </span>
           
           </div>
        <div className='remove-button' onClick={()=>removeItem(id)}>&#10005;  </div>

        
    </div>
  )
}

export default CheckOutItem