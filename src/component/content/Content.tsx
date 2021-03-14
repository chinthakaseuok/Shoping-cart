import React from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home/Home";
import CheckOut from "./Checkout/CheckOut";
import Routes from "../../Routes";

const Content : React.FC = () =>{
    return(
        <React.Fragment>
            <NavigationBar/>
            <Routes/>
            {/*<Home/>*/}
            {/*<CheckOut/>*/}
        </React.Fragment>


    );
};
export default Content;
