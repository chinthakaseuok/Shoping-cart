import React from "react";
import {Col, Row} from "react-bootstrap";
import delivery from "../../assets/icons/delivery (2).svg";
import {FiPhoneCall} from "react-icons/all";
import ShoppingCart from "../../assets/icons/cart.svg"



const Header :React.FC = () => {

    const cartCount: number = 9;
    const CartBubble: React.FC = () => {
        if (cartCount < 10) {
            return (<span className='shopping-cart-icon-bubble'>{cartCount}</span>);
        }
        return (<span className='shopping-cart-icon-bubble'>9+</span>);
    }
    return(
        <Row className='header mt-5'>
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

            <Col xs={8} className='mb-2'>
               <h1 className='logo mb-0'>LOGO</h1>
            </Col>
            <Col xs={2} className='cart text-right pt-1 mb-2'>
                <img src={ShoppingCart} alt={ShoppingCart}/>
                <CartBubble/>

            </Col>
            <Col xs={2} className='CheckOutButton pl-0 mb-2' >
                <h3 className=' py-2 mb-0 text-center'>Check out</h3>
            </Col>
        </Row>


    );
};
export default Header;
