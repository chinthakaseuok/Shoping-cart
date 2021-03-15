import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "./reducers";
import thunkMiddleware from "redux-thunk";

export const configureStore = () => {
    let persistedState = {}
    const store = createStore(rootReducer,
        persistedState,
        compose(applyMiddleware(thunkMiddleware)));
    return store;
}
