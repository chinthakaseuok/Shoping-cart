import React from "react";
import ProductTile from "./ProductTile";
import {Col, Container, Row} from "react-bootstrap";
import {products} from "../../../../repository/products";
import {IProduct} from "../../../../store/storeTypes/product";
import {useSelector} from "react-redux";
import {AppState} from "../../../../store/reducers";

const ProductList: React.FC = () => {
    const currentCategory = useSelector((state: AppState) => state.category.selectedCategory);
    const populateAllProducts = () => {
        return (
            <React.Fragment>
                {products.map((product: IProduct) => {
                    if(currentCategory === 'All'){
                        return (
                            <ProductTile product={product} key={product.productId}/>
                        );
                    }
                    if( product.category===currentCategory)
                    return (
                        <ProductTile product={product} key={product.productId}/>
                    );
                })}

            </React.Fragment>
        );
    }

    return (
        <Container className='mb-5' fluid>
            <Row className="justify-content-around">
                <Col xs={12} lg={9}>
                    <Row>
                        <Col xs={12}>
                            <Row className="searchResults">
                                <Row>
                                    {populateAllProducts()}
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductList;
