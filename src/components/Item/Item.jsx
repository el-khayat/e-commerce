import React from 'react'
import './Item.scss'
const Item = ({name,imageUrl,price}) => {
  return (
    
    <div className="item">
        <div className='back-ground' style={{
            backgroundImage :`url(${imageUrl})`,

        }}>
          <div className='btn' > ADD TO CARD</div>
        </div>
        <div className='itemName' > {name} </div>
        <div className='itemPrice'  > {price}$ </div>
    </div>
  )
}

export default Item