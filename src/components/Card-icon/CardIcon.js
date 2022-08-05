import React from 'react'
import './CardIcon.scss'
import {connect} from 'react-redux'
import {ToggeleDropDown} from '../../redux/cart/Cart-action'


import {ReactComponent as BagIcon} from '../../assets/shopping-bag.svg'
const CardIcon = ({hidden,numberOfItems}) => {
  return (
    <div className='container-bag-icon' onClick={hidden} >
        <BagIcon className='bag-icon' />
        <div className='number'> {numberOfItems}  </div>
    </div>
  )
}


const mapDispatchToProps = dispatch =>({
 
    hidden :()=> dispatch(ToggeleDropDown())

})
 
const mapStateToProps = ({cart:{cartItems}})=>({
  numberOfItems : cartItems.reduce((acc,item)=>acc+item.quantity, 0)
})


export default connect(mapStateToProps,mapDispatchToProps)(CardIcon)