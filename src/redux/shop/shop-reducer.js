import  SHOP_DATA  from "./shop-data";
const INITIAL_STATE ={
    collections :SHOP_DATA
}


const ShopReducer = (state = INITIAL_STATE , action)=>{
    switch (action.type) {

        default:
            return state
            break;
    }
}

export default ShopReducer ;