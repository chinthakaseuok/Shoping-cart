import {SELECTED_CATEGORY} from "../constants/categoryActions";
import {ChangeCategory} from "../storeTypes/categoryActions";


export const changeCategory = (category: string): ChangeCategory => {
    return {
        type: SELECTED_CATEGORY,
        payload: category
    }
}
