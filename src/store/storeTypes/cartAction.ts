
import {ICartProduct} from "./cartProducts";
import {
    ADD_TO_CART,
    DECREMENT_CART_QTY,
    INCREMENT_CART_QTY,
    REMOVE_FROM_CART,
    UPDATE_CART_QTY
} from "../constants/cartProductActions";

export interface AddToCart {
    type: typeof ADD_TO_CART,
    payload: ICartProduct
}

export interface RemoveFromCart {
    type: typeof REMOVE_FROM_CART,
    payload: number
}

export interface UpdateCartQty {
    type: typeof UPDATE_CART_QTY,
    payload: {
        index: number,
        updatedQty: number
    }
}

export interface IncrementCartQty {
    type: typeof INCREMENT_CART_QTY,
    payload: number
}

export interface DecrementCartQty {
    type: typeof DECREMENT_CART_QTY,
    payload: number
}


export type CartActionTypes = AddToCart | RemoveFromCart | UpdateCartQty | IncrementCartQty | DecrementCartQty;


