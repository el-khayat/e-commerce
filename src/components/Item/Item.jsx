import React from 'react'
import { connect } from 'react-redux'
import './Item.scss'
import { addItem } from '../../redux/cart/Cart-action'
const Item = ({item,addItem}) => {
  const {name,imageUrl,price} = item
  return (
    
    <div className="item">

        <div className='back-ground' style={{
            backgroundImage :`url(${imageUrl})`,
        }}>


          <div className='btn' onClick={()=>addItem(item)} > ADD TO CARD</div>
          
        </div>
        <div className='itemName' > {name} </div>
        <div className='itemPrice'  > {price}$ </div>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  addItem : item =>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(Item)