import React from 'react'
import './FormButon.scss'

const FormButon = ({children,isGoogle,...otherProps}) => {

  return (
    <button 
    className={`${isGoogle? "isGoogle":''} custom-button `} 
    {...otherProps}  
    
    >
      {children}
      </button>
  )
}

export default FormButon