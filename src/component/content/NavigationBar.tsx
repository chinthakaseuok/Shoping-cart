import React from "react";
import {Dropdown, Row} from "react-bootstrap";

const NavigationBar : React.FC = () =>{
    return(
        <Row className='NaviBar pb-2'>
            <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className='naviDropDown'>
                    Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <span  className='item  pt-2'>Home</span>
            <span  className='item  pt-2'>FAQ</span>
            <span  className='item  pt-2'>About Us</span>
            <span className='item mr-auto  pt-2'>Contact Us</span>
        </Row>
    );
};
export default NavigationBar;
