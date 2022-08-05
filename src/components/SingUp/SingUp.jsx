import React from 'react'
import { useState } from 'react';
import FormButon from '../form-butom/FormButon'
import FormInput from '../form-input/FormInput'
import "./SingUp.scss";
import {auth} from '../../firebase/firebase-utils'
import {SingUpWithEmailPassword} from '../../firebase/firebase-utils'

const SingUp = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confermePassword,setConfermePassword] = useState("")

    const handelName = (event)=>{
        setName(event.target.value)
    }
    const handelEmail = (event)=>{
        setEmail(event.target.value)
    }
    const handelPassword = (event)=>{
        setPassword(event.target.value)
    }
    const handelConfermePassword = (event)=>{
        setConfermePassword(event.target.value)
    }
    
    const handelSubmit = async (event)=>{
        event.preventDefault()
        if (password !== confermePassword) {
            alert("password don't match")
            return;
        }
        try{

           const user =  await SingUpWithEmailPassword({email,password,name})
            setName("")
            setPassword("")
            setEmail("")
            setConfermePassword("")

        }catch(e){
            console.log(e.message);
        }

    }




  return (
    <div className='sing-up'>
        <h2 className='title'> i don't have an account</h2>
        <p> sing up whith email and password</p>
        <form action="" onSubmit={handelSubmit}>

            <FormInput type="text" value={name} label="name"  onChange={handelName} />
            <FormInput type="email" value={email} label="email" onChange={handelEmail} />
            <FormInput type="password" value={password} label="Password" onChange={handelPassword} />
            <FormInput type="password" value={confermePassword} label="ConfermePassword" onChange={handelConfermePassword} />

            <FormButon type="submit" > SING UP</FormButon>

        </form>
    
    
    
    
    
    </div>
  )
}

export default SingUp