import type { ActionCreator } from "./index";
import type { Order } from "../types";

export const LOAD_ORDERS = "LOAD_ORDERS";

export const loadOrdersAction: ActionCreator = () => {
    return {
        type: LOAD_ORDERS,
    };
};

export const ORDERS_LOADED = "ORDERS_LOADED";

export const ordersLoadedAction: ActionCreator<Order[]> = (
    orders: Order[]
) => ({
    type: ORDERS_LOADED,
    payload: orders,
});