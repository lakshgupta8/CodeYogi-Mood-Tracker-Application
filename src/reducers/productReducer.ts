import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/product";
import { ORDERS_LOADED, ORDER_DETAIL_LOADED } from "../actions/order";
import type { Action } from "../actions";
import { produce } from "immer";
import { normalize, schema } from "normalizr";
import type { NormalisedProduct, Product } from "../types";

export type State = {
    products: NormalisedProduct;
    loading: boolean;
};

const initialState: State = {
    products: {},
    loading: false
};

export const productReducer = (currentState: State = initialState, action: Action): State => {
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
                const orderArr = action.payload;

                const productEntity = new schema.Entity("products");
                const orderEntity = new schema.Entity("orders", {
                    products: [productEntity],
                });

                const data = normalize(orderArr, [orderEntity]);

                draft.products = { ...draft.products, ...data.entities.products };
            });
        case ORDER_DETAIL_LOADED:
            return produce(currentState, (draft) => {
                const order = action.payload;
                const productEntity = new schema.Entity("products");

                const data = normalize(order.products, [productEntity]);

                draft.products = { ...draft.products, ...data.entities.products };
            })
        default:
            return currentState;
    }
}