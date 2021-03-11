import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import { Search } from 'react-feather';

const SearchBar : React.FC = () =>{
    return(
        // <Row className='mx-0'>
            <Col xs={9} lg={6} className='mx-auto'>
                <Form className='searchForm'>
                    <Form.Group controlId='formProductSearch'>
                        <Form.Control type="text" placeholder="Search...." className='searchBar'/>
                        <Search className='search-icon'/>
                    </Form.Group>
                </Form>
            </Col>
        // </Row>
    );
};
export default SearchBar;
