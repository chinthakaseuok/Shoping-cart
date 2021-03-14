import React from "react";
import {Col, Row, Dropdown, Button} from "react-bootstrap";
import CartPreviewItem from "./CartPreviewItem";
import coconut from "../../assets/images/coconut.png"
import carrot from "../../assets/images/carrot.png"
import Summary from "./Summary";
import {useHistory} from "react-router-dom";


    const CartItems = () => {
        return (
            <React.Fragment>
                <Row>
                    <Col xs={12} className='cart-preview-item-list'>
                        <Dropdown.Item href="#/action-1" className='cart-preview-item py-3' disabled>
                            <CartPreviewItem productName={"Coconut"} imageName={coconut} productQty={5}price={80}/>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1" className='cart-preview-item py-3' disabled>
                            <CartPreviewItem productName={"Carrot"} imageName={carrot} productQty={5}price={70}/>
                        </Dropdown.Item>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }

    const CartPreview: React.FC = () =>{

        const history = useHistory<string>();
        const handleRouting = (path:string) => {
            history.push(path);
        }

        return(
            <Dropdown.Menu className='cart-preview-section'>
                <CartItems/>
                <Summary/>
                <Button variant={"success"} className='float-right py-0 px-5'
                        onClick={() => handleRouting('/checkout')}>Check Out</Button>
            </Dropdown.Menu>
        );
    };
export default CartPreview;
