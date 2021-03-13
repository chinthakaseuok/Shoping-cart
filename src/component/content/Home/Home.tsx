import React from "react";
import {Row} from "react-bootstrap";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import CategoryHorizontalList from "./CategoryHorizontalList";
import ProductList from "./ProductList";

const Home: React.FC = () =>{
    return(
        <Row>
            <Banner/>
            <SearchBar/>
            <CategoryList/>
            <CategoryHorizontalList/>
            <ProductList/>
        </Row>
    );
};
export default Home;
