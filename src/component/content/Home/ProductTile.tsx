import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import coconut from "../../../assets/images/coconut.png"
import carrot from "../../../assets/images/carrot.png"
import CurrencyInput from "react-currency-input-field";
import {MDBInput} from "mdbreact";

type ProductProps = {
    imageName : any
    productName: string
    productPrice: number
    productPrePrice:number
}
const ProductTile:React.FC<ProductProps> = (props) => {

    const {imageName,productName,productPrice,productPrePrice} = props;
    const [qty, setQty] = useState<number>(1);

    return(
        <Col xs={6} sm={6} md={4} lg={3} className="pr-4 pl-4 pb-2 pt-2">
            <Row>
                <Col className="product-tile">
                    <Row className="justify-content-center">
                        {
                            <img className="productImage" src={imageName} alt={imageName}/>
                        }
                    </Row>

                    <React.Fragment>

                            <Row>
                                <Col className="productName ">
                                    {productName}
                                    {/*<h2>{productName}</h2>*/}
                                </Col>
                            </Row>

                            <Row className="justify-content-center justify-content-between pl-3 pr-3">
                                <Col xs={12} sm={6} className="productPrice">
                                    <CurrencyInput
                                               className= "productPrice text-center"
                                               value={productPrice}
                                               prefix={"Rs. "}
                                               decimalScale={2}
                                               disabled
                                    />
                                </Col>
                                <Col xs={12} sm={6} className="preProductPrice strikethrough">
                                    <CurrencyInput
                                               className="productPrice text-center"
                                                value={productPrePrice}
                                                prefix={"Rs. "}
                                                decimalScale={2}
                                                disabled
                                    />
                                </Col>
                            </Row>

                            <Row className="mt-4 mb-1 justify-content-between ">
                                <Col lg={12} xl={4} className="align-self-center">
                                    <MDBInput type="number" className="qty" value={qty} min={0}
                                              onChange={(e) => {
                                                  setQty(Number(e.currentTarget.value))
                                              }}
                                    />
                                </Col>
                                <Col lg={12} xl={8}>
                                    <Button type="submit" className="addBtn">
                                        Add To Cart
                                    </Button>

                                </Col>
                            </Row>
                        </React.Fragment>

                </Col>
            </Row>
        </Col>

    );
};
export default ProductTile;
