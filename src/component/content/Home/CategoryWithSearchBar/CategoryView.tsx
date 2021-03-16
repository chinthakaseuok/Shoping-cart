import React from 'react';
import {Col, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {changeCategory} from "../../../../store/actions/categoryActions"


type categoryProps = {
    name:string
    image:string
}

const CategoryView: React.FC<categoryProps> = (props) => {
    const dispatch = useDispatch();
    const {image,name}=props
    return (
        <Col xs={4} md={4} lg={2} className='px-4 mb-3'>
            <Row className='category-view text-center'>
                <Col xs={12} className='p-2 category' onClick={() => dispatch(changeCategory(name))}>
                    <img className='category-image m-0 p-0 mb-lg-2' src={image} alt={image}/>
                    <br/>
                    <span>{name}</span>
                </Col>
            </Row>
        </Col>

    );

};

export default CategoryView;
