import type { State } from "../store";
import { createSelector } from "reselect";
import type { Product } from "../types";
import { productsMapSelector } from "./product";

export const orderStateSelector = (state: State) => state.orders;

export const orderLoadingSelector = createSelector(
    orderStateSelector,
    (state) => state.loading
);

export const ordersMapSelector = createSelector(
    orderStateSelector,
    (state) => state.orders
);

export const ordersSelector = createSelector(
    ordersMapSelector,
    (normalisedOrders) =>
        Object.keys(normalisedOrders).map((orderId) => normalisedOrders[+orderId])
);

export const orderProductsSelector = createSelector(
    ordersMapSelector,
    productsMapSelector,
    (ordersMap, productsMap) =>
        Object.keys(ordersMap).reduce<{
            [orderId: number]: Product[];
        }>((previous, currentorderId) => {
            const orderId = +currentorderId;
            const order = ordersMap[orderId];
            if (!order) {
                return previous;
            }
            const products = order.products.map((pid: number) => productsMap[pid]);
            return { ...previous, [orderId]: products };
        }, {})
);