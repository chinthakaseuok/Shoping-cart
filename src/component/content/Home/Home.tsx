import React from "react";
import {Row} from "react-bootstrap";
import Banner from "./Banner/Banner";
import SearchBar from "./CategoryWithSearchBar/SearchBar";
import CategoryList from "./CategoryWithSearchBar/CategoryList";
import CategoryHorizontalList from "./CategoryWithSearchBar/CategoryHorizontalList";
import ProductList from "./Products/ProductList";

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
