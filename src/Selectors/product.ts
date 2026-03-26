import type { State } from "../store";
import { createSelector } from "reselect";

export const productsStateSelector = (state: State) => state.products;

export const productsLoadingSelector = createSelector(
    productsStateSelector,
    (state) => state.loading
);

export const productsMapSelector = createSelector(
    productsStateSelector,
    (state) => state.products
);

export const productsSelector = createSelector(
    productsMapSelector,
    (normalisedProducts) => Object.keys(normalisedProducts).map(productId => normalisedProducts[+productId])
);