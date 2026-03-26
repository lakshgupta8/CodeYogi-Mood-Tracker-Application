import { LOAD_ORDERS, ORDERS_LOADED, ORDER_DETAIL_LOADED } from "../Actions/order";
import type { Action } from "../Actions";
import { produce } from "immer";
import type { NormalisedOrder, Order } from "../types";
import { normalize, schema } from "normalizr";

export type State = {
    loading: boolean;
    orders: NormalisedOrder;
};

export const initialState: State = {
    loading: false,
    orders: {},
};

export const orderReducer = (currentState: State = initialState, action: Action): State => {
    switch (action.type) {
        case LOAD_ORDERS:
            return produce(currentState, draft => {
                draft.loading = true;
            });
        case ORDERS_LOADED:
            return produce(currentState, draft => {
                draft.loading = false;

                const orderArr: Order[] = action.payload;

                const productEntity = new schema.Entity("products");
                const orderEntity = new schema.Entity("orders", {
                    products: [productEntity],
                });

                const data = normalize(orderArr, [orderEntity]);

                draft.orders = data.entities.orders!;
            });
        case ORDER_DETAIL_LOADED:
            return produce(currentState, (draft) => {
                const order = action.payload;

                const productEntity = new schema.Entity("products");
                const orderEntity = new schema.Entity("orders", {
                    products: [productEntity],
                });

                const data = normalize(order, orderEntity);

                draft.orders[order.id] = data.entities.orders![order.id];
            });
        default:
            return currentState;
    }
}