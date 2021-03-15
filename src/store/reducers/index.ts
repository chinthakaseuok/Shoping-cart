import {combineReducers} from "redux";
import {cartProductReducer} from "./cartReducers";
import {categoryReducer} from "./categoryReducers"



export const rootReducer = combineReducers({
    cart:cartProductReducer,
    category: categoryReducer
})

export type AppState = ReturnType<typeof rootReducer>
