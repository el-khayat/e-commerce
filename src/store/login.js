const insialState = {
    logged:false
}

const loggin = (state = insialState,action)=> {
switch (action.type) {
    case "LOGIN":
        return {
            ...state,
            logged : true
        };
    case "LOGOUT":
        return {
            ...state,
            logged : false
        };

    default:
        return state;
}
}
export default loggin