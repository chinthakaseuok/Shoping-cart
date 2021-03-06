import React from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home/Home";

const Content : React.FC = () =>{
    return(
        <React.Fragment>
            <NavigationBar/>
            <Home/>
        </React.Fragment>


    );
};
export default Content;
