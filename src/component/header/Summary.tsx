import React from "react";
import {Col, Row} from "react-bootstrap";
import CurrencyFormat from "./CurencyFormat";




const Summary: React.FC = () => {

    return (
        <Row className='mt-4 px-3 cart-preview-summary'>
        <Col>
            <Row>
                <Col xs={7} className='font-weight-bold'>Subtotal</Col>
                <Col xs={5}>
                    <CurrencyFormat
                        className={"text-right text-danger font-weight-bold"}
                    value={250}/>
                </Col>
            </Row>
            <Row>
            <Col xs={7} className='font-weight-bold'>Discount</Col>
                <Col xs={5}>
            <CurrencyFormat
                className={"text-right font-weight-bold"}
            value={50}/>
            </Col>
            </Row>
            <Row className='mt-2 py-2 total'>
            <Col xs={7} className='font-weight-bold'>Total</Col>
                <Col xs={5}>
            <CurrencyFormat
                className={"text-right text-danger font-weight-bold"}
            value={200}/>
            </Col>
            </Row>
        </Col>
        </Row>
    );
}

export default Summary;
