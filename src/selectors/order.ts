import type { State } from "../store";

export const ordersSelector = (state: State) => {
    const NormalisedOrders = state.orders.orders;
    return Object.keys(NormalisedOrders).map(
        orderId => NormalisedOrders[+orderId]
    );
}

export const orderLoadingSelector = (state: State) => state.orders.loading;