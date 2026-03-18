import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/product";
import type { AnyAction } from "redux";
import { produce } from "immer";
import type { NormalisedProduct, Order, Product } from "../types";
import { ORDERS_LOADED } from "../actions/order";

export type State = {
    products: NormalisedProduct;
    loading: boolean;
};

const initialState: State = {
    products: {},
    loading: false
};

export const productReducer = (currentState: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return produce(currentState, (draft) => {
                draft.loading = true;
            });
        case PRODUCTS_LOADED:
            return produce(currentState, (draft) => {
                const products: Product[] = action.payload;
                const normalisedProducts = products.reduce((
                    previous: NormalisedProduct,
                    current: Product
                ) => {
                    return { ...previous, [current.id]: current };
                }, {});

                draft.products = normalisedProducts;
                draft.loading = false;
            });
        case ORDERS_LOADED:
            return produce(currentState, (draft) => {
                const orders = action.payload;
                const products = orders.reduce((
                    previous: Product[],
                    current: Order
                ) => {
                    return [...previous, ...current.products];
                }, []);

                const normalisedProducts = products.reduce((
                    previous: NormalisedProduct,
                    current: Product
                ) => {
                    return { ...previous, [current.id]: current };
                }, {});

                draft.products = normalisedProducts;
            });
        default:
            return currentState;
    }
}