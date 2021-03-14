import React from "react";
import {Col, Row} from "react-bootstrap";
import CheckoutListItem from "./CheckoutListItem";
import coconut from "../../../assets/images/coconut.png"
import carrot from "../../../assets/images/carrot.png"
import CheckoutSummery from "./CheckoutSummery";

const CheckoutTable : React.FC = () =>{

    const CartItems = () => {
        return(
            <React.Fragment>
                <CheckoutListItem index={1} productName={"Coconut"} image={coconut} price={80} qty={5}/>
                <CheckoutListItem index={2} productName={"Carrot"} image={carrot} price={60} qty={1}/>
            </React.Fragment>
        );
    };

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
