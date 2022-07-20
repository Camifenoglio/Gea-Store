import {combineReducers} from "redux";

import usersReducers from './usersReducers';
import productReducers from "./productReducers";





const mainReducers = combineReducers ({
    usersReducers,
    productReducers
    
})

export default mainReducers;