import RedRice from '../assets/images/products/Araliya-Rice-Red-Raw-5kg.jpg'
import Urid from '../assets/images/products/urad.jpg'
import GreenGeam from '../assets/images/products/green-gram.png'
import Salt from '../assets/images/products/salt.jpg'
import Avocado from '../assets/images/products/avacado.jpg';
import Turmeric from '../assets/images/products/Turmeric.png';
import IceCream from '../assets/images/products/iceCream.jpeg';
import Pudding from '../assets/images/products/puding.jpg';
import Carrot from '../assets/images/products/carrot.png';
import Chickpea from '../assets/images/products/chickpea.jpg';
import Coconut from '../assets/images/products/coconut.jpg';
import Corn from '../assets/images/products/corn.jpg';
import Dhal from '../assets/images/products/dhal.png';
import Grapes from '../assets/images/products/grapes.jpg';
import Lime from '../assets/images/products/lime.jpg';
import Onions from '../assets/images/products/onions.jpg';
import RedChilli from '../assets/images/products/red_chili.jpg';
import Tomato from '../assets/images/products/tomato.png';
import dettol from '../assets/images/products/dettol.png';
import HandWash from '../assets/images/products/hand_wash.png';
import Shampoo from '../assets/images/products/shampoo.jpg';
import Mask from '../assets/images/products/face_mask.png';
import Diaper from '../assets/images/products/diaper.png';
import Cream from '../assets/images/products/cream.jpg';
import FaceWash from '../assets/images/products/face_wash.jpg';
import Cod_liver_oil from '../assets/images/products/cod_liver_oil.png';
import Biriyani from '../assets/images/products/biriyani.png';
import Mushroom from '../assets/images/products/mushrooms.png';
import prawns from '../assets/images/products/prawns.jpg';
import Burger from '../assets/images/products/burger.png';
import Sousage from '../assets/images/products/gril-sousage.png';
import pizza from '../assets/images/products/pizza.png';
import FloorPolish from '../assets/images/products/floorPolish.png';
import Oven from '../assets/images/products/oven.png';
import CeilingFan from '../assets/images/products/ceiling fan.png';
import AirConditioner from '../assets/images/products/air conditionor.png';
import GasBurner from '../assets/images/products/gas-burner.png';
import DonutMaker from '../assets/images/products/donut-maker.png';
import SteamIron from '../assets/images/products/steamIron.jpg';
import EKettle from '../assets/images/products/eKettle.jpg';
import {IProduct} from "../store/storeTypes/product";

export const products: IProduct [] = [

    {
        productId: 1,
        productName: 'Coconut',
        productPrice: 90.00,
        productImage:Coconut,
        category:'Grocery',
    },
    {
        productId: 2,
        productName: 'Salt',
        productPrice: 60.00,
        productImage:Salt,
        category:'Grocery',
    },
    {
        productId: 3,
        productName: 'Turmeric (50g)',
        productPrice: 250.00,
        productImage:Turmeric,
        category:'Grocery',
    },
    {
        productId: 4,
        productName: 'Red Raw (5kg)',
        productPrice: 500.00,
        productImage:RedRice,
        category:'Grocery',
    },
    {
        productId: 5,
        productName: 'Dhal',
        productPrice: 180.00,
        productImage:Dhal,
        category:'Grocery',
    },
    {
        productId: 6,
        productName: 'Green-Gram',
        productPrice: 800.00,
        productImage:GreenGeam,
        category:'Grocery',
    },{
        productId: 7,
        productName: 'Urid',
        productPrice: 1600.00,
        productImage:Urid,
        category:'Grocery',
    },
    {
        productId: 8,
        productName: 'Chickpea',
        productPrice: 240.00,
        productImage:Chickpea,
        category:'Grocery',
    },
    {
        productId: 9,
        productName: 'Avocado',
        productPrice: 100.00,
        productImage:Avocado,
        category:'Grocery',
    },

    {
        productId: 10,
        productName: 'Carrot',
        productPrice: 150.00,
        productImage:Carrot,
        category:'Grocery',
    },
    {
        productId: 11,
        productName: 'Corn',
        productPrice: 30.00,
        productImage:Corn,
        category:'Grocery',
    },

    {
        productId: 12,
        productName: 'Grapes',
        productPrice: 70.00,
        productImage:Grapes,
        category:'Grocery',
    },
    {
        productId: 13,
        productName: 'Lime',
        productPrice: 110.00,
        productImage:Lime,
        category:'Grocery',
    },
    {
        productId: 14,
        productName: 'Onions',
        productPrice: 160.00,
        productImage:Onions,
        category:'Grocery',
    },
    {
        productId: 15,
        productName: 'Red Chili',
        productPrice: 200.00,
        productImage:RedChilli,
        category:'Grocery',
    },
    {
        productId: 16,
        productName: 'Tomato',
        productPrice: 50.00,
        productImage:Tomato,
        category:'Grocery',
    },
    {
        productId: 17,
        productName: 'Face Mask',
        productPrice: 30.00,
        productImage:Mask,
        category:'Pharmacy',
    },
    {
        productId: 18,
        productName: 'Dettol 30ml',
        productPrice: 50.00,
        productImage:dettol,
        category:'Pharmacy',
    },
    {
        productId: 19,
        productName: 'Face Wash',
        productPrice: 50.00,
        productImage:FaceWash,
        category:'Pharmacy',
    },
    {
        productId: 20,
        productName: 'Hand Wash',
        productPrice: 200.00,
        productImage:HandWash,
        category:'Pharmacy',
    },
    {
        productId: 21,
        productName: 'Baby Diapers',
        productPrice: 300.00,
        productImage:Diaper,
        category:'Pharmacy',
    },
    {
        productId: 22,
        productName: 'Codliver Oil',
        productPrice: 100.00,
        productImage:Cod_liver_oil,
        category:'Pharmacy',
    },
    {
        productId: 23,
        productName: 'Shampoo',
        productPrice: 100.00,
        productImage:Shampoo,
        category:'Pharmacy',
    },
    {
        productId: 24,
        productName: 'Baby Cream',
        productPrice: 200.00,
        productImage:Cream,
        category:'Pharmacy',
    },
    {
        productId: 25,
        productName: 'Chicken Biriyani',
        productPrice: 50.00,
        productImage:Biriyani,
        category:'Food',
    },
    {
        productId: 26,
        productName: 'Mushroom',
        productPrice: 50.00,
        productImage:Mushroom,
        category:'Food',
    },
    {
        productId: 27,
        productName: 'Prawns',
        productPrice: 50.00,
        productImage:prawns,
        category:'Food',
    },
    {
        productId: 28,
        productName: 'Ice-Cream',
        productPrice: 50.00,
        productImage:IceCream,
        category:'Food',
    },
    {
        productId: 29,
        productName: 'Burger',
        productPrice: 50.00,
        productImage:Burger,
        category:'Food',
    },
    {
        productId: 30,
        productName: 'Grill Sausages',
        productPrice: 50.00,
        productImage:Sousage,
        category:'Food',
    },

    {
        productId: 31,
        productName: 'Pizza',
        productPrice: 50.00,
        productImage:pizza,
        category:'Food',
    },    {
        productId: 32,
        productName: 'Pudding',
        productPrice: 50.00,
        productImage:Pudding,
        category:'Food',
    },
    {
        productId: 33,
        productName: 'Gas burner',
        productPrice: 50.00,
        productImage:GasBurner,
        category:'Electronic',
    },
    {
        productId: 34,
        productName: 'Steam Iron',
        productPrice: 50.00,
        productImage:SteamIron,
        category:'Electronic',
    },
    {
        productId: 35,
        productName: 'Electric Kettle',
        productPrice: 50.00,
        productImage:EKettle,
        category:'Electronic',
    },
    {
        productId: 36,
        productName: 'Donut Maker',
        productPrice: 50.00,
        productImage:DonutMaker,
        category:'Electronic',
    },
    {
        productId: 37,
        productName: 'AirConditioner',
        productPrice: 50.00,
        productImage:AirConditioner,
        category:'Electronic',
    },
    {
        productId: 38,
        productName: 'Ceiling Fan',
        productPrice: 50.00,
        productImage:CeilingFan,
        category:'Electronic',
    },
    {
        productId: 39,
        productName: 'Electric Oven',
        productPrice: 50.00,
        productImage:Oven,
        category:'Electronic',
    },
    {
        productId: 40,
        productName: 'Floor Polisher',
        productPrice: 50.00,
        productImage:FloorPolish,
        category:'Electronic',
    }

]
