import React from "react";
import {Button, Col, Container, Dropdown, Image} from "react-bootstrap";
import ShoppingCart from "../../assets/icons/cart.svg";
import CartPreview from "./Cart/CartPreview";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppState} from "../../store/reducers";

const BottomHeader:React.FC = () => {
    const history = useHistory<string>();
    const cartCount: number = useSelector((state: AppState) => state.cart).cartItems.length;

    const handleRouting = (path:string) => {
        history.push(path);
    }

    const CartBubble: React.FC = () => {
        if (cartCount < 10) {
            return (<span className='shopping-cart-icon-bubble'>{cartCount}</span>);
        }
        return (<span className='shopping-cart-icon-bubble'>9+</span>);
    }
    return(
        <Col xs={12} className='cart text-right pt-1 mb-2 '>
            <Container className='header d-flex align-items-center justify-content-between  pr-lg-5' fluid>
                <span className='logo mr-auto mouse-pointer' onClick={() => handleRouting('/')}>LOGO</span>
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

                <Button variant={"success"} className='checkout-button d-none d-lg-block'
                        onClick={() => handleRouting('/checkout')}>
                    CheckOut
                </Button>
            </Container>
        </Col>
    );
};

export default BottomHeader;
