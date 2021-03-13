import React from 'react';
import {Col, Row} from "react-bootstrap";
import CategoryImage from '../../../../assets/images/store-category-1.jpg';

const CategoryView: React.FC = () => {

    return (
        <Col xs={4} md={4} lg={2} className='px-4 mb-3'>
            <Row className='category-view text-center'>
                <Col xs={12} className='p-2'>
                    <img className='category-image m-0 p-0' src={CategoryImage} alt={CategoryImage}/>
                    <br/>
                    <span>Grocery</span>
                </Col>
            </Row>
        </Col>

    );

};

export default CategoryView;
