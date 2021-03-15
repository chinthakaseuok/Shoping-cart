import React from "react";
import {Col, Row , Image} from "react-bootstrap";
import CheckoutListItem from "./CheckoutListItem";
import emptyCartImage from "../../../assets/images/empty-cart.png"
import CheckoutSummery from "./CheckoutSummery";
import {useSelector} from "react-redux";
import {CartState, ICartProduct} from "../../../store/storeTypes/cartProducts";
import {AppState} from "../../../store/reducers";

const CheckoutTable : React.FC = () =>{

    const cart: CartState = useSelector((state: AppState) => state.cart);

    const CartItems = () => {
        if(cart.cartItems.length === 0){
            return (
                <Row className='my-0 py-0'>
                    <Col className='text-center'>
                        <Image src={emptyCartImage}  className='empty-cart-image' alt={"empty cart"}/>
                    </Col>
                </Row>
            );
        }

        return(
            <React.Fragment>
                {cart.cartItems.map((item:ICartProduct, index:number) => {
                    return (
                        <i key={item.product.productId}>
                            <CheckoutListItem
                                cartProduct={item}
                                index={index+1}
                            />
                        </i>
                    );
                })}
            </React.Fragment>
        );
    }


    return(
        <Row className="checkoutTable">
            <Col>
                <h4>Shopping Cart</h4>
                <Row>
                    <Col xs="auto">#</Col>
                    <Col xs={2} sm={1} className="imageColHead"/>
                    <Col xs={3} xl={4}>Item</Col>
                    <Col className="d-none d-sm-block" sm={2}>Qty</Col>
                    <Col className="d-none d-sm-block">Unit Price</Col>
                    <Col>Amount</Col>
                    <Col xs="auto"/>
                </Row>
                <hr className="listHr"/>
                <CartItems/>
                <CheckoutSummery/>
            </Col>
        </Row>
    );
};
export default CheckoutTable;
