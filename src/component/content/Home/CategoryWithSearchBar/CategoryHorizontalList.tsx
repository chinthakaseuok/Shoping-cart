import React from 'react';
import {Col, Row} from "react-bootstrap";
import {ICategory} from "../../../../store/storeTypes/category";
import {categories} from "../../../../repository/categories";
import CategoryView from "./CategoryView";

const CategoryHorizontalList: React.FC = () => {

    return (
        <Col xs={12} lg={9} className='mx-auto'>
            <Row className='px-lg-3 mb-3 d-flex justify-content-center justify-content-lg-between'>
                {categories.map((category:ICategory, index:number) => {
                    return (
                        <CategoryView name={category.categoryName} image={category.categoryImage}/>
                );
                })}
            </Row>
        </Col>
    );

};

export default CategoryHorizontalList;
