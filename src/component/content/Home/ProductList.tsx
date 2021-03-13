import React from "react";
import ProductTile from "./ProductTile";
import {Row, Col, Container} from "react-bootstrap";
import coconut from "../../../assets/images/coconut.png"
import carrot from "../../../assets/images/carrot.png"

const ProductList : React.FC = () => {
    return(
        <Container className='mb-5' fluid>
            <Row className="justify-content-around">
                <Col xs={12} lg={9}>
                    <Row>
                        <Col xs={12}>
                            <Row className="searchResults">
                                <Row>
                                    <ProductTile imageName={coconut}
                                                 productName={"Coconut"}
                                                 productPrice={65.00}
                                                 productPrePrice={70.00}
                                    />
                                    <ProductTile imageName={carrot}
                                                 productName={"Carrot"}
                                                 productPrice={70.00}
                                                 productPrePrice={70.00}
                                    />
                                    <ProductTile imageName={coconut}
                                                 productName={"Coconut"}
                                                 productPrice={65.00}
                                                 productPrePrice={80.00}
                                    />
                                    <ProductTile imageName={carrot}
                                                 productName={"Carrot"}
                                                 productPrice={65.00}
                                                 productPrePrice={70.00}
                                    />
                                    <ProductTile imageName={carrot}
                                                 productName={"Carrot"}
                                                 productPrice={55.00}
                                                 productPrePrice={70.00}
                                    />
                                    <ProductTile imageName={coconut}
                                                 productName={"Coconut"}
                                                 productPrice={65.00}
                                                 productPrePrice={70.00}
                                    />
                                    <ProductTile imageName={carrot}
                                                 productName={"Carrot"}
                                                 productPrice={65.00}
                                                 productPrePrice={70.00}
                                    />
                                    <ProductTile imageName={coconut}
                                                 productName={"Coconut"}
                                                 productPrice={65.00}
                                                 productPrePrice={70.00}
                                    />
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
