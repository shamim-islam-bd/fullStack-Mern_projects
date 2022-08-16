// 1. Redux has two methods. (State, Action)
//      *State > takes initaial states  like useSate.
//      *Action > declare which functonallity will be applied.  


// 2. Dispatch Action -> Object -> type(descripe which task it'll do), payload(Data store)

// 3. Reducer(works based on action type) it'll update state based on action type. 
//     exp: if i say addUser then  reducer will check the type if it is addUser then 
//     it'll add a User.

// * Reducer fuction recv two parameter(state, action>type/payload)
//   >then switch case used for action checking.

// 4. Store( getState(), dispatch(), subscribe() )

// *getState()

// *dispatch()

// *subscribe()


// -----------(  Redux-middleware  ) > 

// - when i need to use middleware in redux project then have to import redux {Applymiddleware} from "redux" 
// - 2ndly middleware mianly used in createStore(  other, Applymiddleware() ) as 2nd perameter.

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productDetailReducer, productReducer } from "./reducer/productReducer";

const rootReducer = combineReducers({
    products: productReducer,
    productDetails: productDetailReducer,
})

// state declarations
const initialState = {

}

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
