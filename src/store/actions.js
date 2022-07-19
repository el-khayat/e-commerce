// action 
const addOne = ()=> {
    return {
      type : "inc",
      payload: 1
    }
  }

  const minaseTwo = ()=>{
    return {
      type : "dec",
      payload: 2
    }
  }

  const login = ()=>{
    return {
        type:"LOGIN"
    }

}

const logout = ()=>{
return   { type:"LOGOUT"}
}


  export  {addOne,minaseTwo,login,logout}