import React from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home/Home";
import CheckOut from "./Checkout/CheckOut";
import Routes from "../../Routes";
import {BrowserRouter} from "react-router-dom";
import {Container} from "react-bootstrap";

const Content : React.FC = () =>{
    return(
        <React.Fragment>
            <NavigationBar/>
            <Routes/>
        </React.Fragment>


    );
};
export default Content;
