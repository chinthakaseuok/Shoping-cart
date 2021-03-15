import {SELECTED_CATEGORY} from "../constants/categoryActions";
import {CategoryActionTypes} from "../storeTypes/categoryActions";
import {SelectedCategoryState} from "../storeTypes/category";

export const initialState: SelectedCategoryState = {
    selectedCategory: 'Grocery'
}

export const categoryReducer =(
    state: SelectedCategoryState = initialState,
    action: CategoryActionTypes): SelectedCategoryState => {
    switch (action.type){
        case SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory:action.payload
            }
        default:
            return state;
    }
}
