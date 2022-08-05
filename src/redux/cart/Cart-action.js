
export const ToggeleDropDown = () => {
    return  {type : "TOGGELE_DROP_DOWN"}

}
 

export const addItem = item => {
    return  {
        type : "ADD_ITEM",
        payload: item 
    }

}
export const removeItem = id => {
    return  {
        type : "REMOVE_ITEM",
        payload: id
    }

}
export const decriseItem = (item) => {
    return  {
        type : "DECRISE_ITEM",
        payload: item
    }

}
