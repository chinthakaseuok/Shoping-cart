import {IProduct} from "./product";

export interface ICartProduct {
    id: number,
    product: IProduct,
    qty: number
}

export interface CartState {
    cartItems: ICartProduct []
}
