import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CheckOutHeader from "./CheckOutHeader";
import CheckoutTable from "./CheckoutTable";

const CheckOut: React.FC = () => {
    return (
        <Container className='mb-5' fluid>
            <Row className="checkout justify-content-around" >
                <Col xs={12} >
                    <CheckOutHeader/>
                    <CheckoutTable/>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut;
