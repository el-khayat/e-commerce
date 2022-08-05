import React from 'react'
import "./SinginAndSingUp.scss"
import SingIn from '../../components/SingIn/SingIn'
import SingUp from '../../components/SingUp/SingUp'


const SinginAndSingUp = () => {
  return (
    <div className="singInAndSingUp">
    <SingIn/>
    <SingUp/>
    </div>
  )
}

export default SinginAndSingUp