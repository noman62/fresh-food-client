import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllPizzaReducer,addPizzaReducer,getPizzaByIdReducer,updatePizzaByIdReducer} from "../reducers/pizzaReducer"
import { cartReducer } from '../reducers/cartReducer';
import {registerReducer,loginReducer,getAllUsersReducer} from '../reducers/userReducer'
import { placeOrderReducer,getUserOrdersReducer,allUserOrdersReducer  } from '../reducers/orderReducer';

const cartItems=localStorage.getItem("cartItems") 
? JSON.parse(localStorage.getItem('cartItems')):[]

const currentUser=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem('currentUser')):null
const rootReducer=combineReducers({
getAllPizzaReducer:getAllPizzaReducer,
cartReducer:cartReducer,
registerReducer:registerReducer,
loginReducer:loginReducer,
placeOrderReducer:placeOrderReducer,
getUserOrdersReducer:getUserOrdersReducer ,
addPizzaReducer:addPizzaReducer,
getPizzaByIdReducer:getPizzaByIdReducer,
updatePizzaByIdReducer:updatePizzaByIdReducer,
allUserOrdersReducer:allUserOrdersReducer,
getAllUsersReducer:getAllUsersReducer,

});
const initialState={
    cartReducer:{
        cartItems:cartItems,
    },
    loginReducer:{
        currentUser:currentUser,
    }
};
const middleware=[thunk];
const store=createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;