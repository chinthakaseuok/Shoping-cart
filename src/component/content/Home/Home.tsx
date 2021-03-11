import React from "react";
import {Row} from "react-bootstrap";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import CategoryHorizontalList from "./CategoryHorizontalList";

const Home: React.FC = () =>{
    return(
        <Row>
            <Banner/>
            <SearchBar/>
            <CategoryList/>
            <CategoryHorizontalList/>
        </Row>
    );
};
export default Home;
