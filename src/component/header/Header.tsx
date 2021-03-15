import React from "react";
import {Row} from "react-bootstrap";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";


const Header :React.FC = () => {
    return(
        <Row className='FullHeader mt-5 d-flex'>
            <TopHeader/>
            <BottomHeader/>
        </Row>

    );
};
export default Header;
