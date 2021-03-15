import {SELECTED_CATEGORY} from "../constants/categoryActions";

export interface ChangeCategory{
    type: typeof SELECTED_CATEGORY,
    payload: string
}

export type CategoryActionTypes = ChangeCategory;
