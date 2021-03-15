import {CartState} from "../storeTypes/cartProducts";
import {CartActionTypes} from "../storeTypes/cartAction";
import {
    ADD_TO_CART,
    DECREMENT_CART_QTY,
    INCREMENT_CART_QTY,
    REMOVE_FROM_CART,
    UPDATE_CART_QTY
} from "../constants/cartProductActions";


export const initialState: CartState = {
    cartItems: []
}

export const cartProductReducer =(
    state: CartState = initialState,
    action: CartActionTypes): CartState => {
    switch (action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems,action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartProduct => cartProduct.id !== action.payload
                )
            }
        case UPDATE_CART_QTY:
            return {
                ...state,
                cartItems: state.cartItems.map((cartProduct) =>  cartProduct.id === action.payload.index?{
                    ...cartProduct, qty:+action.payload.updatedQty
                }:cartProduct)
            }
        case INCREMENT_CART_QTY:
            return {
                ...state,
                cartItems: state.cartItems.map(
                    (cartProduct,i) => cartProduct.id === action.payload ? {
                        ...cartProduct,
                        qty: state.cartItems[i].qty + 1
                    } : cartProduct
                )
            }
        case DECREMENT_CART_QTY:
            return {
                ...state,
                cartItems: state.cartItems.map(
                    (cartProduct, i) => cartProduct.id === action.payload ? {
                        ...cartProduct,
                        qty: state.cartItems[i].qty - 1
                    } : cartProduct
                )
            }
        default:
            return state;
    }
}
