import {useSelector,useDispatch} from 'react-redux'
import {addOne,minaseTwo,login,logout} from './store/actions'
function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div >
     
      
     {
       state.loggin.logged?(  <h1> HELLO frind do you want to logout 
        <button onClick={ ()=> dispatch(logout()) } >logout</button>
         </h1> ):
       (  <h1>  
        <button onClick={ ()=> dispatch(login()) }>login</button>
         </h1> )
     }

       <div> 
           <button onClick={()=> dispatch(addOne())  } >+</button>
               {state.conter}
           <button onClick={()=> dispatch(minaseTwo())  } >-</button>
       </div>
    </div>
  );
}

export default App;
