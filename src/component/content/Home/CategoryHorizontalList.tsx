import React from 'react';
import CategoryView from "./CategoryView";
import {Col, Row} from "react-bootstrap";

const CategoryHorizontalList: React.FC = () => {

    return (
        <Col xs={12} lg={9} className='mx-auto'>
            <Row className='px-lg-3 mb-3 d-flex justify-content-center justify-content-lg-between'>
                <CategoryView/>
                <CategoryView/>
                <CategoryView/>
                <CategoryView/>
                <CategoryView/>
            </Row>
        </Col>
    );

};

export default CategoryHorizontalList;
