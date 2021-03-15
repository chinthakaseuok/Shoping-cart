import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import {MDBInput} from "mdbreact";
import {useDispatch, useSelector} from "react-redux";
import {IProduct} from "../../../../store/storeTypes/product";
import {addProductToCart} from "../../../../store/actions/cartProductActions";
import {CartState} from "../../../../store/storeTypes/cartProducts";
import {AppState} from "../../../../store/reducers";

type ProductProps = {
    product:IProduct
}
const ProductTile:React.FC<ProductProps> = (props) => {

    const {product} = props;
    const [qty, setQty] = useState<number>(1);
    const dispatch = useDispatch()
    const handleOnAdd = () =>{
        dispatch(addProductToCart({id:product.productId , product : product, qty:qty}))
    }
    const cart: CartState = useSelector((state: AppState) => state.cart);

    const getCartProductQty = (): number => {
        let cartProductId: number = 0;
        cart.cartItems.forEach((cartProduct) => {
            if (cartProduct.product.productId === props.product.productId)
                cartProductId = cartProduct.qty;
        })
        return cartProductId
    }
    return(
        <Col xs={6} sm={6} md={4} lg={3} className="pr-4 pl-4 pb-2 pt-2">
            <Row>
                <Col className="product-tile">
                    <Row className="justify-content-center">
                        {
                            <img className="productImage" src={product.productImage} alt={product.productImage}/>
                        }
                    </Row>

                    <React.Fragment>

                            <Row>
                                <Col className="productName ">
                                    {product.productName}
                                </Col>
                            </Row>

                            <Row className="justify-content-center justify-content-between pl-3 pr-3">
                                <Col xs={12} sm={6} className="productPrice">
                                    <CurrencyInput
                                               className= "productPrice text-center"
                                               value={product.productPrice}
                                               prefix={"Rs. "}
                                               decimalScale={2}
                                               disabled
                                    />
                                </Col>
                                <Col xs={12} sm={6} className="preProductPrice strikethrough">
                                    <CurrencyInput
                                               className="productPrice text-center"
                                                value={product.productPrice}
                                                prefix={"Rs. "}
                                                decimalScale={2}
                                                disabled
                                    />
                                </Col>
                            </Row>

                            <Row className="mt-4 mb-1 justify-content-between ">
                                <Col lg={12} xl={4} className="align-self-center">
                                    <MDBInput type="number" className="qty" value={getCartProductQty()} min={0}
                                              onChange={(e) => {
                                                  setQty(Number(e.currentTarget.value))
                                              }}
                                    />
                                </Col>
                                <Col lg={12} xl={8}>
                                    {!getCartProductQty()&&<Button type="submit"
                                                                   className="addBtn"
                                                                   onClick={handleOnAdd}>
                                        Add To Cart
                                    </Button>}

                                    {!!getCartProductQty()&&<Button type="submit" variant="danger-outline"
                                                                  className="updateBtn"
                                                                  onClick={handleOnAdd}>
                                        update
                                    </Button>}

                                </Col>
                            </Row>
                        </React.Fragment>

                </Col>
            </Row>
        </Col>

    );
};
export default ProductTile;
