import React, {useEffect} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import {useDispatch, useSelector} from "react-redux";
import {IProduct} from "../../../../store/storeTypes/product";
import {CartState, ICartProduct} from "../../../../store/storeTypes/cartProducts";
import * as action from "../../../../store/actions/cartProductActions";
import {AppState} from "../../../../store/reducers";
import {Controller, useForm} from "react-hook-form";


type ProductProps = {
    product: IProduct
}
type FormData = {
    productQty: string;
};
const ProductTile: React.FC<ProductProps> = (props) => {
    const cart: CartState = useSelector((state: AppState) => state.cart);
    const {product} = props;

    const getCartProductId = (): number => {
        let relevantCartProductId: number = 0;
        cart.cartItems.forEach((cartProduct) => {
            if (cartProduct.product.productId === props.product.productId)
                relevantCartProductId = cartProduct.product.productId;
        })
        return relevantCartProductId
    }
    const getCartProductQty = (): number => {
        let CartProductQty: number = 0;
        cart.cartItems.forEach((cartProduct) => {
            if (cartProduct.product.productId === props.product.productId)
                CartProductQty = cartProduct.qty;
        })
        return CartProductQty
    }

    const dispatch = useDispatch();

    const {handleSubmit, control, setValue} = useForm<FormData>();

    useEffect(() => {
        if (!getCartProductQty()) {
            setValue("productQty", "1");
            return;
        }
        setValue("productQty", getCartProductQty());
    });

    const handleOnAddProductToCart = (data: FormData) => {
        if (data.productQty === '0' && !getCartProductQty()) {
            setValue('productQty', '1')
            return;
        }

        if (!getCartProductQty()) {
            const newCartProduct: ICartProduct = {
                id: product.productId,
                product: product,
                qty: +data.productQty
            }
            dispatch(action.addProductToCart(newCartProduct));
        } else if (getCartProductQty() && data.productQty === '0') {
            dispatch(action.removeProductFromCart(getCartProductId()))
        } else {
            dispatch(action.updateCartProductQty(props.product.productId, +data.productQty))
        }
    }

    return (
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
                                    className="productPrice text-center"
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
                        <Form onSubmit={handleSubmit(handleOnAddProductToCart)}>
                            <Row className="mt-4 mb-1 justify-content-between ">
                                <Col lg={12} xl={4} className="align-self-center">

                                    <Form.Group>
                                        <Controller
                                            as={<Form.Control className={'qty'} type="number" placeholder="1" min={0}
                                                              size={"lg"}/>}
                                            name={'productQty'}
                                            defaultValue='1'
                                            control={control}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={12} xl={8}>
                                    {!getCartProductQty() && <Button type="submit"
                                                                     className="addBtn">

                                        Add To Cart
                                    </Button>}

                                    {!!getCartProductQty() && <Button type="submit" variant="danger-outline"
                                                                      className="updateBtn"
                                    >
                                        update
                                    </Button>}

                                </Col>
                            </Row>
                        </Form>
                    </React.Fragment>

                </Col>
            </Row>
        </Col>

    );
};
export default ProductTile;
