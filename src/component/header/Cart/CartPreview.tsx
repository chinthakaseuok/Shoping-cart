import React from "react";
import {Col, Row, Dropdown, Button, Image} from "react-bootstrap";
import CartPreviewItem from "./CartPreviewItem";
import Summary from "./Summary";
import {useHistory} from "react-router-dom";
import emptyCartImage from "../../../assets/images/empty-cart.png";
import {CartState, ICartProduct} from "../../../store/storeTypes/cartProducts";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/reducers";


const CartItems = () => {
    const cart: CartState = useSelector((state: AppState) => state.cart);
    if(cart.cartItems.length === 0){
        return (
            <Row className='my-0 py-0'>
                <Col className='text-center'>
                    <Image src={emptyCartImage}  className='empty-cart-image' alt={"empty cart"}/>
                </Col>
            </Row>
        );
    }

    return(
        <React.Fragment>
            {cart.cartItems.map((item:ICartProduct, index:number) => {
                return (
                    // <i key={item.product.productId}>
                    //     <CartPreviewItem
                    //         cartProduct={item}
                    //         index={index+1}
                    //     />
                    // </i>
                    <Dropdown.Item key={item.product.productId}href="#/action-1"
                                   className='cart-preview-item py-3' disabled>
                        <CartPreviewItem
                            cartProduct={item}
                           />
                    </Dropdown.Item>
                );
            })}
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
