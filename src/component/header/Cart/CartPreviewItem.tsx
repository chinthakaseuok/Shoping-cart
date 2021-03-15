import React from "react";
import {Col, Row} from "react-bootstrap";
import CurencyFormat from "./CurencyFormat";
import {ICartProduct} from "../../../store/storeTypes/cartProducts";


type CartPreviewItemProps={

    cartProduct:ICartProduct
}
const CartPreviewItem: React.FC<CartPreviewItemProps> = (props) =>{
    const {cartProduct}=props

    return(
        <Row>
            <Col xs={4} className='px-0 image'>
                <img src={cartProduct.product.productImage} className='cart-preview-item-image'/>
            </Col>
            <Col xs={8} className='d-flex flex-column justify-content-between px-0'>

                <span className='item-name'>{cartProduct.product.productName}</span>
                <Row>
                    <Col>
                        <span className='item-quantity'>Qty:{cartProduct.qty}</span>
                    </Col>
                    <Col>
                        <CurencyFormat
                            className={'item-price'}
                            value={cartProduct.product.productPrice}/>
                    </Col>
                </Row>
            </Col>
        </Row>
   );
};

export default CartPreviewItem;
