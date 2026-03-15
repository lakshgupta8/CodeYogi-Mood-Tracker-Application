import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/product";
import type { AnyAction } from "redux";
import { produce } from "immer";
import type { Product } from "../types";

export type State = {
    products: Product[];
    loading: boolean;
    error: string | null;
};

const initialState: State = {
    products: [],
    loading: false,
    error: null,
};

export const productReducer = (currentState: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return produce(currentState, (draft) => {
                draft.loading = true;
            });
        case PRODUCTS_LOADED:
            return produce(currentState, (draft) => {
                draft.products = action.payload;
                draft.loading = false;
            });
        default:
            return currentState;
    }
}