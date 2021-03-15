import React from 'react';
import {Col, Row, Image} from 'react-bootstrap';
import {MinusCircle, PlusCircle, X} from 'react-feather';
import CurrencyFormat from "../../header/Cart/CurencyFormat"
import {ICartProduct} from "../../../store/storeTypes/cartProducts";
import {useDispatch} from "react-redux";
import {
    decrementCartProductQty,
    incrementCartProductQty,
    removeProductFromCart
} from "../../../store/actions/cartProductActions";

type CheckoutProps={
    index:number,
    cartProduct:ICartProduct
}

const CheckoutListItem : React.FC<CheckoutProps>= (props) => {
    const dispatch = useDispatch();
    const {index,cartProduct}=props;
    return (
        <React.Fragment>
            <Row className="d-flex checkoutListItem">
                <Col xs="auto" className="align-self-center m-0 ml-1">{index}</Col>
                <Col xs={2} sm={1} className="align-self-center itemImageCol" >
                    <Image className="itemImage" src={cartProduct.product.productImage} alt="image"/>
                </Col>
                <Col className="align-self-center" xs={3} xl={4} >{cartProduct.product.productName}</Col>
                <Col className="d-none d-sm-block align-self-center" sm={2}>
                    <MinusCircle className="plusMinus mouse-pointer"
                                 onClick={()=>{dispatch(decrementCartProductQty(cartProduct.id))}}
                    />
                    <span className="qty">{cartProduct.qty}</span>
                    <PlusCircle className="plusMinus mouse-pointer"
                                onClick={()=>{dispatch(incrementCartProductQty(cartProduct.id))}}
                    />
                </Col>
                <Col className="d-none d-sm-block align-self-center">
                    <CurrencyFormat
                        className={"priceDisplay"}
                        value={cartProduct.product.productPrice}/>
                </Col>
                <Col className=" align-self-center">
                    <CurrencyFormat
                        className={"priceDisplay"}
                        value={cartProduct.qty*cartProduct.product.productPrice}/>
                </Col>
                <Col className="align-self-center pl-0 "  xs="auto">
                    <X
                        className="deleteCheckoutItem"
                        onClick={()=>{dispatch(removeProductFromCart(cartProduct.id))}}
                    />
                </Col>
            </Row>
            <hr className="listHr"/>
        </React.Fragment>
    )
}

export default CheckoutListItem
