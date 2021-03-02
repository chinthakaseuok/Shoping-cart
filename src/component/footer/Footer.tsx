import React from 'react';
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";
import facebook from "../../assets/icons/facebook.svg"
import twitter from "../../assets/icons/twitter.svg"
import linkedIn from "../../assets/icons/LinkedIn.svg"
import pinterest from "../../assets/icons/pinterest.svg"
import wifi from "../../assets/icons/WiFi.svg"
import youtube from "../../assets/icons/Youtube.svg"

const Footer = () => {
    return (
        <Container fluid className="d-flex justify-content-center px-0">
            <Row className='Footer'>
                <Col xs={12} className='footerNaviBar text-center px-0'>
                    <ul className='pt-4 px-0'>
                        <li className=' pb-1'>
                            ABOUT US
                        </li>
                        <li className=' pb-1'>
                            FAQ
                        </li>
                        <li className=' pb-1'>
                            DELIVERY INFO
                        </li>
                        <li className=' pb-1'>
                            CONTACT US
                        </li>
                    </ul>
                </Col>

                <Col xs={12} className='FooterIcons text-center'>
                    <ul className='px-0 pt-2'>
                        <li className='px-1'>
                            <label><img src={facebook} className='icon' alt={facebook}/> </label>
                        </li>
                        <li className='px-1'>
                            <label><img src={twitter} className='icon' alt={twitter}/> </label>
                        </li>
                        <li className='px-1'>
                            <label><img src={linkedIn} className='icon' alt={linkedIn}/> </label>
                        </li>
                        <li className='px-1'>
                            <label><img src={pinterest} className='icon' alt={pinterest}/> </label>
                        </li>
                        <li className='px-1'>
                            <label><img src={wifi} className='icon' alt={wifi}/> </label>
                        </li>
                        <li className='px-1'>
                            <label><img src={youtube} className='icon' alt={youtube}/> </label>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} className='copyright text-center'>
                    <h3>Copyright &copy; 2020. All Right Reserved. <span>Powered By SoftVessel</span> </h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer