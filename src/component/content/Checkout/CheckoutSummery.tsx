import React from "react";
import {Col, Row} from "react-bootstrap";
import Discount from "./Discount";
import CurrencyFormat from "../../header/Cart/CurencyFormat";
import {CartState} from "../../../store/storeTypes/cartProducts";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/reducers";

const CheckoutSummery:React.FC = () =>{
    const cart: CartState = useSelector((state: AppState) => state.cart);

    const calculateSubTotal = (): number => {
        let total: number = 0;
        cart.cartItems.forEach((cartProduct) => {
            total += cartProduct.qty * cartProduct.product.productPrice;
        })
        return total;
    }

    const showDelivery = () : number =>{
        if (cart.cartItems.length === 0) {
            return 0;
        }
        return (100);

    }

    return(
        <React.Fragment>
            <Row className='d-flex justify-content-end w-100'>
                <Col xs={12} lg={7}>
                    <Discount/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={5}>Delivery Charge</Col>
                <Col xs={7} className='pr-lg-5'>
                    <CurrencyFormat
                        className={"text-right"}
                        value={showDelivery()}/>
                </Col>
            </Row>
            <hr className="listHr mt-3 mb-3"/>
            <Row>
                <Col xs={4}>Subtotal</Col>
                <Col xs={8} className='pr-lg-5'>
                    <CurrencyFormat
                        className={"text-right text-danger font-weight-bold"}
                        value={calculateSubTotal()+showDelivery()}/>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>Discount</Col>
                <Col xs={8} className='pr-lg-5'>
                    <CurrencyFormat
                        className={"text-right font-weight-bold"}
                        value={0}/>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>Total</Col>

                <Col  xs={8} className='pr-lg-5'>
                    <CurrencyFormat
                        className={"text-right text-danger font-weight-bold"}
                        value={calculateSubTotal()+showDelivery()}/>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CheckoutSummery;
