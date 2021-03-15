import React from "react";
import {Col} from "react-bootstrap";
import delivery from "../../assets/icons/delivery (2).svg";
import {FiPhoneCall} from "react-icons/all";

const TopHeader :React.FC = () => {
    return(
        <React.Fragment>
            <Col xs={12} className='px-0'>
                <ul className='text-right mb-0'>
                    <li>
                        <label className='delivery px-3'> <img src={delivery} alt={delivery}/> Delivery Areas</label>
                    </li>
                    <li>
                        <label className='contact px-3'> <FiPhoneCall/>+94 112 123 456</label>
                    </li>
                    <li>
                        <label className='register px-3'> Register</label>
                    </li>
                    <li>
                        <label className='login px-3' > Login</label>
                    </li>
                </ul>
            </Col>
            <Col xs={12} className='px-0'>
                <hr className='topLine md-5'/>
            </Col>
        </React.Fragment>
    );
};

export default TopHeader;
