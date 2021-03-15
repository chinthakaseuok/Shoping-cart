import React from "react";
import {Dropdown, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {changeCategory} from "../../store/actions/categoryActions";
import {useDispatch} from "react-redux";

const NavigationBar : React.FC = () =>{

    const dispatch = useDispatch();
    const history = useHistory<string>();
    const handleRouting = (path:string) => {
        history.push(path);
    }

    return(
        <Row className='NaviBar pb-2'>
            <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className='naviDropDown'>
                    Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => dispatch(changeCategory('All'))}>All</Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(changeCategory('Grocery'))}>Grocery</Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(changeCategory('Pharmacy'))}>Pharmacy</Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(changeCategory('Food'))}>Food</Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(changeCategory('Electronic'))}>Electronic</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <span  className='item  pt-2 ' onClick={() => handleRouting('/')}>Home</span>
            <span  className='item  pt-2'>FAQ</span>
            <span  className='item  pt-2'>About Us</span>
            <span className='item mr-auto  pt-2'>Contact Us</span>
        </Row>
    );
};
export default NavigationBar;
