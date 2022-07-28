import { combineReducers } from "redux";

import usersReducers from './usersReducers';
import productReducers from "./productReducers";
import { shoppingReducers } from "./shoppingReducers";
import blogReducer from "./blogReducer";




const mainReducers = combineReducers({
    usersReducers,
    productReducers,
    shoppingReducers,
    blogReducer

});

export default mainReducers;