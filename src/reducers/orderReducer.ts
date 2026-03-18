import { LOAD_ORDERS, ORDERS_LOADED } from "../actions/order";
import type { AnyAction } from "redux";
import { produce } from "immer";
import type { NormalisedOrder, Order } from "../types";

export type State = {
    loading: boolean;
    orders: NormalisedOrder;
};

export const initialState: State = {
    loading: false,
    orders: {},
};

export const orderReducer = (currentState: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case LOAD_ORDERS:
            return produce(currentState, draft => {
                draft.loading = true;
            });
        case ORDERS_LOADED:
            return produce(currentState, draft => {
                draft.loading = false;

                const orderArr: Order[] = action.payload;

                draft.orders = orderArr.reduce((
                    previous: NormalisedOrder,
                    current: Order
                ) => {
                    return { ...previous, [current.id]: current };
                }, {});
            });
        default:
            return currentState;
    }
}