import React ,{useState} from 'react'

const SingIn = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handelChangeEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handelChangePassword = (event)=>{
        setPassword(event.target.value);
    }
    const handelSubmit = event =>{
        event.preventDefault();
        console.log("Email : ",email);
        console.log("Password : ",password);
        setEmail("");
        setPassword("");
    }

  return (
    <div className='singin'>

    <h2> I aredy have an acount </h2>
    <span> sing in with your email and password  </span>
    <form onSubmit={handelSubmit}>

        <input 
        type="email" 
        name="" 
        id="email"
        value={email}
        onChange={handelChangeEmail} 
        />
 <label htmlFor="email">email</label>
        <input 
        type="password" 
        name="" 
        id="password"
        value={password}
        onChange={handelChangePassword}  />
        <label htmlFor="password">password</label>
        <input type="submit" value="singin"  />
    </form>
    </div>
  )
}

export default SingIn