import React from "react";
import {Row} from "react-bootstrap";
import Banner from "./Banner";
import SearchBar from "./SearchBar";

const Home: React.FC = () =>{
    return(
        <Row>
            <Banner/>
            <SearchBar/>
        </Row>
    );
};
export default Home;
