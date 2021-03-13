import React from "react";
import {Col, Row, Image} from "react-bootstrap";
import CurencyFormat from "./CurencyFormat";


type ProductProps = {
    imageName : any
    productName: string
    productQty:number
    price : number

}
const CartPreviewItem: React.FC<ProductProps> = (props) =>{
    const {imageName,productName,productQty,price}=props
    return(
        <Row>
            <Col xs={4} className='px-0'>
                <Image src={imageName} className='cart-preview-item-image'/>
            </Col>
            <Col xs={8} className='d-flex flex-column justify-content-between px-0'>
                <span className='item-name'>{productName}</span>
                <Row>
                    <Col>
                        <span className='item-quantity'>Qty:{productQty}</span>
                    </Col>
                    <Col>
                        <CurencyFormat
                            className={'item-price'}
                            value={price}/>
                    </Col>
                </Row>
            </Col>
        </Row>
   );
};

export default CartPreviewItem;
