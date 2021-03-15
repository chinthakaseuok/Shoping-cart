
import {ICartProduct} from "../storeTypes/cartProducts";

import {
    ADD_TO_CART,
    DECREMENT_CART_QTY,
    INCREMENT_CART_QTY,
    REMOVE_FROM_CART,
    UPDATE_CART_QTY
} from "../constants/cartProductActions";
import {
    AddToCart,
    DecrementCartQty,
    IncrementCartQty,
    RemoveFromCart,
    UpdateCartQty
} from "../storeTypes/cartAction";

export const addProductToCart = (newCartProduct: ICartProduct): AddToCart => {
    return {
        type: ADD_TO_CART,
        payload: newCartProduct
    }
}

export const removeProductFromCart = (index: number): RemoveFromCart => {
    return {
        type: REMOVE_FROM_CART,
        payload: index
    }
}

export const updateCartProductQty = (index: number, updatedQty: number): UpdateCartQty => {
    return {
        type: UPDATE_CART_QTY,
        payload: {
            index: index,
            updatedQty: updatedQty
        }
    }
}

export const incrementCartProductQty = (index: number): IncrementCartQty => {
    return {
        type: INCREMENT_CART_QTY,
        payload: index
    }
}

export const decrementCartProductQty = (index: number): DecrementCartQty => {
    return {
        type: DECREMENT_CART_QTY,
        payload: index
    }

}
