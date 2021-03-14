import React from 'react';
import {Col, Row, Image} from 'react-bootstrap';
import {MinusCircle, PlusCircle, X} from 'react-feather';
import CurrencyFormat from "../../header/CurencyFormat"

type CheckoutProps={
    index:number;
    image:any;
    productName:string;
    qty:number
    price:number

}

const CheckoutListItem : React.FC<CheckoutProps>= (props) => {

    const {index,image,productName,qty,price}=props;
    return (
        <React.Fragment>
            <Row className="d-flex checkoutListItem">
                <Col xs="auto" className="align-self-center m-0 ml-1">{index}</Col>
                <Col xs={2} sm={1} className="align-self-center itemImageCol" >
                    <Image className="itemImage" src={image} alt="image"/>
                </Col>
                <Col className="align-self-center" xs={3} xl={4} >{productName}</Col>
                <Col className="d-none d-sm-block align-self-center" sm={2}>
                    <MinusCircle className="plusMinus mouse-pointer"
                    />
                    <span className="qty">{qty}</span>
                    <PlusCircle className="plusMinus mouse-pointer"
                    />
                </Col>
                <Col className="d-none d-sm-block align-self-center">
                    <CurrencyFormat
                        className={"priceDisplay"}
                        value={price}/>
                </Col>
                <Col className=" align-self-center">
                    <CurrencyFormat
                        className={"priceDisplay"}
                        value={qty*price}/>
                </Col>
                <Col className="align-self-center pl-0 "  xs="auto">
                    <X
                        className="deleteCheckoutItem"
                    />
                </Col>
            </Row>
            <hr className="listHr"/>
        </React.Fragment>
    )
}

export default CheckoutListItem
