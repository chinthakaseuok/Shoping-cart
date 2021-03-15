import React from "react";
import NavigationBar from "./NavigationBar";
import Routes from "../../Routes";

const Content : React.FC = () =>{
    return(
        <React.Fragment>
            <NavigationBar/>
            <Routes/>
        </React.Fragment>


    );
};
export default Content;
