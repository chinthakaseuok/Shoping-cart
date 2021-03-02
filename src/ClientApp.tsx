import React from "react";
import {Container} from "react-bootstrap";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Content from "./component/content/Content";

const ClientApp:React.FC = () =>{
    return(
        <Container fluid >
            <Header/>
            <Content/>
            <Footer/>
        </Container>
    );
};
export default ClientApp;
