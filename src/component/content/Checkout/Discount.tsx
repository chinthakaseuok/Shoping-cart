import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const Discount : React.FC = () => {
    return(
        <Row className='p-2'>
            <Col xs={12} lg={5} className='text-lg-right px-lg-0'>
                <span>Have a discount code ?</span>
            </Col>
            <Col xs={7} lg={5}>
                <input
                    className='w-100 px-2'
                />
            </Col>
            <Col xs={3} lg={2} className='px-lg-1 text-right'>
                <Button
                    variant={"success"}
                    className='px-4 CheckoutButton'
                >APPLY</Button>
            </Col>
        </Row>
    );
};
export default Discount;
