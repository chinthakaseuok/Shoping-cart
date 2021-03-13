import React from "react";
import {Button, Col, Container, Dropdown, Image, Row} from "react-bootstrap";
import delivery from "../../assets/icons/delivery (2).svg";
import {FiPhoneCall} from "react-icons/all";
import ShoppingCart from "../../assets/icons/cart.svg"
import CartPreview from "./CartPreview";


const Header :React.FC = () => {

    const cartCount: number = 9;
    const CartBubble: React.FC = () => {
        if (cartCount < 10) {
            return (<span className='shopping-cart-icon-bubble'>{cartCount}</span>);
        }
        return (<span className='shopping-cart-icon-bubble'>9+</span>);
    }
    return(
        <Row className='FullHeader mt-5 d-flex'>
            <Col xs={12} className='px-0'>
                <ul className='text-right mb-0'>
                    <li>
                        <label className='delivery px-3'> <img src={delivery} alt={delivery}/> Delivery Areas</label>
                    </li>
                    <li>
                        <label className='contact px-3'> <FiPhoneCall/>+94 112 123 456</label>
                    </li>
                    <li>
                        <label className='register px-3'> Register</label>
                    </li>
                    <li>
                        <label className='login px-3'> Login</label>
                    </li>
                </ul>
            </Col>
            <Col xs={12} className='px-0'>
                <hr className='topLine md-5'/>
            </Col>

            <Col xs={12} className='cart text-right pt-1 mb-2 '>
                <Container className='header d-flex align-items-center justify-content-between sticky-top pr-lg-5' fluid>
                    <span className='logo mr-auto mouse-pointer'>LOGO</span>
                    <span className='mx-lg-4 shopping-cart-icon-area'>
                         <Dropdown>
                          <Dropdown.Toggle className='shopping-cart-icon-button'>
                            <Image className='shopping-cart-icon mouse-pointer'
                                   src={ShoppingCart} alt={"shopping-cart-icon"}/>
                            <CartBubble/>
                         </Dropdown.Toggle>
                             <CartPreview/>
                         </Dropdown>
                     </span>

                    <Button variant={"success"} className='checkout-button d-none d-lg-block'>
                        CheckOut
                    </Button>

                </Container>
            </Col>
        </Row>


    );
};
export default Header;
