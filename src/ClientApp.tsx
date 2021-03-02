import React from "react";
import {Container} from "react-bootstrap";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";

const ClientApp:React.FC = () =>{
    return(
        <Container fluid >
            <Header/>
            <Footer/>
        </Container>
    );
};
export default ClientApp;