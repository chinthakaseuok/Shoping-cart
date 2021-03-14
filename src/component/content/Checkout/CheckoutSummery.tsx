import React from "react";
import {Col, Row} from "react-bootstrap";
import Discount from "./Discount";
import CurrencyFormat from "../../header/CurencyFormat";

const CheckoutSummery:React.FC = () =>{
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
                        value={100}/>
                </Col>
            </Row>
            <hr className="listHr mt-3 mb-3"/>
            <Row>
                <Col xs={4}>Subtotal</Col>
                <Col xs={8} className='pr-lg-5'>
                    <CurrencyFormat
                        className={"text-right text-danger font-weight-bold"}
                        value={560}/>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>Discount</Col>
                <Col xs={8} className='pr-lg-5'>
                    <CurrencyFormat
                        className={"text-right font-weight-bold"}
                        value={60}/>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>Total</Col>
                <Col  xs={8} className='pr-lg-5'>
                    <CurrencyFormat
                        className={"text-right text-danger font-weight-bold"}
                        value={500}/>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CheckoutSummery;
