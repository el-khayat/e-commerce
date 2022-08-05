const INITIAL_STATE = {
    hidden : true,
    cartItems :[],
    numberOfItems :0 
}

const CartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'TOGGELE_DROP_DOWN':
            return {
                ...state,
                hidden: !state.hidden
            }
            break;
        case 'REMOVE_ITEM':
   
        const newItems2 = state.cartItems.filter( item => item.id != action.payload)
        return {...state ,cartItems :newItems2}
            break;
        case 'ADD_ITEM':

        let itemExiste = false ;
         const newItems =   state.cartItems.map( item=> {
                if(item.id == action.payload.id){
                    itemExiste = true ;
                    ++item.quantity;
                    return item;
                }else{
                     return item
                    }
               
            
            })

            if (itemExiste) {

                return {...state ,cartItems :newItems,numberOfItems :1+ state.numberOfItems } 
            } else {
                action.payload.quantity = 1 ;
                return {
                ...state,
                cartItems: [...newItems,action.payload],
                numberOfItems :1+ state.numberOfItems 
            }   
            }

         
            break;
        case 'DECRISE_ITEM':

        
         const newItems3 =   state.cartItems.map( item=> {
                if(item.id == action.payload.id){
                   
                    --item.quantity;
                    return item;
                }else{
                     return item
                    }
               
            
            })

           

                return {...state ,cartItems :newItems3.filter(item => item.quantity > 0),numberOfItems :1+ state.numberOfItems } 
           
            break;
        default :
        return state ;
        break ;
    }

}

export default CartReducer ;