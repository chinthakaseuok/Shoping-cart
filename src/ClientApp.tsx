import React from "react";
import {Container} from "react-bootstrap";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Content from "./component/content/Content";
import {BrowserRouter} from "react-router-dom";

const ClientApp:React.FC = () =>{
    return(
        <Container fluid >
            <BrowserRouter>
                <Header/>
                <Content/>
                <Footer/>
            </BrowserRouter>
        </Container>
    );
};
export default ClientApp;
