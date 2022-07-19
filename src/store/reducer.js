import { combineReducers } from "redux";
import conter from './conter'
import loggin from './login'

const reducers = combineReducers({
    conter,
    loggin
})
export default reducers