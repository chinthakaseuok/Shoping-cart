import React from "react";
import {Col, Row} from "react-bootstrap";
import banner from "../../../../assets/images/banner.jpg"
import leaves from "../../../../assets/images/leaves-logo.png"

const Banner : React.FC = () =>{

    const BannerContent : React.FC = () =>{
        return(
            <Row>
                <Col xs={4} md= "auto" lg="auto" className='bannerContent text-left px-0'>
                    <img src={leaves} alt={leaves}/>
                    <p className='mb-0'>100% Healthy & Affordable</p>
                    <h2 className='mb-0'>organic vegetables</h2>
                    <p className='mb-0'>Small Chages Big Difference</p>
                    <button >Shop Now</button>

                </Col>
            </Row>
        );
    };

    return(
       <Col xs={12} className=' banner px-0'>
           <img src={banner} alt={banner} className='bannerImage'/>
           <BannerContent/>
       </Col>
    );
};

export default Banner;
