import React from "react";
import {Col, Row} from "react-bootstrap";
import CurrencyFormat from "./CurencyFormat";
import {CartState} from "../../../store/storeTypes/cartProducts";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/reducers";



const Summary: React.FC = () => {

    const cart: CartState = useSelector((state: AppState) => state.cart);

    const calculateSubTotal = (): number => {
        let total: number = 0;
        cart.cartItems.forEach((cartProduct) => {
            total += cartProduct.qty * cartProduct.product.productPrice;
        })
        return total;
    }

    return (
        <Row className='mt-4 px-3 cart-preview-summary'>
        <Col>
            <Row>
                <Col xs={7} className='font-weight-bold'>Subtotal</Col>
                <Col xs={5}>
                    <CurrencyFormat
                        className={"text-right text-danger font-weight-bold"}
                    value={calculateSubTotal()}/>
                </Col>
            </Row>
            <Row>
            <Col xs={7} className='font-weight-bold'>Discount</Col>
                <Col xs={5}>
            <CurrencyFormat
                className={"text-right font-weight-bold"}
            value={0}/>
            </Col>
            </Row>
            <Row className='mt-2 py-2 total'>
            <Col xs={7} className='font-weight-bold'>Total</Col>
                <Col xs={5}>
            <CurrencyFormat
                className={"text-right text-danger font-weight-bold"}
            value={calculateSubTotal()}/>
            </Col>
            </Row>
        </Col>
        </Row>
    );
}

export default Summary;
