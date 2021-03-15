
import AllCategories from '../assets/images/product categories/allcategories.jpg'
import Grocery from '../assets/images/product categories/grocery.png'
import Pharmacy from '../assets/images/product categories/health.png'
import Food from '../assets/images/product categories/food.png'
import Electronic from '../assets/images/product categories/electro.png'
import {ICategory} from "../store/storeTypes/category";

export const categories: ICategory[] = [
    {
        categoryName: 'All',
        categoryImage: AllCategories
    },
    {
        categoryName: 'Grocery',
        categoryImage: Grocery
    },
    {
        categoryName: 'Pharmacy',
        categoryImage: Pharmacy
    },
    {
        categoryName: 'Food',
        categoryImage: Food
    },
    {
        categoryName: 'Electronic',
        categoryImage: Electronic
    }
]
