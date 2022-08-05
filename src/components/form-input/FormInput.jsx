import React from 'react'
import './FormInput.scss'

const FormInput = ({handelChange,label,type,id ,...otherProps}) => {
  return (
    <div className="group">
      
      <input  
      className='form-input'
      onChange={handelChange}
      label={label}
      type={type}
      id={id}
       {...otherProps} />
       {
        label ?
        (<label htmlFor={id} className={`${otherProps.value.length ? 'shrink':''} form-input-label `} > {label}</label>)
        :
        null
       }
    </div>
  )
}

export default FormInput