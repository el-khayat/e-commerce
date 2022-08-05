import React ,{useState} from 'react'
import FormInput from '../form-input/FormInput'
import FormButon from '../form-butom/FormButon'
import './SingIn.scss' ;
import { singInWithGoogle,loginWithEmailAndPassword } from '../../firebase/firebase-utils'

const SingIn = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handelChangeEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handelChangePassword = (event)=>{
        setPassword(event.target.value);
    }
    const handelSubmit =async event =>{

        event.preventDefault();
        console.log("Email : ",email);
        console.log("Password : ",password);

        try {
           await  loginWithEmailAndPassword(email,password)
        } catch (error) {
            console.log("error on login wuth email and password ",error);
        }



        setEmail("");
       setPassword("");
    }

  return (
    <div className='singin'>

    <h2 className="title"> I aredy have an acount </h2>
    <span> sing in with your email and password  </span>
    <form onSubmit={handelSubmit}>

        <FormInput 
        type="email" 
        name="" 
        id="email"
        value={email}
        onChange={handelChangeEmail} 
        label="email"
        />

        <FormInput 
        type="password" 
        name="" 
        id="password"
        value={password}
        label="password"
        
        onChange={handelChangePassword}  />
        
        


        <div className="buttons">
            <FormButon type="submit" > 
                Sing in
            </FormButon>

            <FormButon onClick={singInWithGoogle} isGoogle > 
                 With Google
            </FormButon>
        </div>
    </form>
    </div>
  )
}

export default SingIn