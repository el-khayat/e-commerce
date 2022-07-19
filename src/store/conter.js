const conter = (state = 7 ,action) =>{
    switch(action.type){
      case "inc" : 
        return state + action.payload;
      case "dec" : 
        return state - action.payload;
      default : return state
  
    }
  }

  export default conter ;