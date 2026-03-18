import type { State } from "../store";

export const productsSelector = (state: State) => {
    const NormalisedProducts = state.products.products;
    return Object.keys(NormalisedProducts).map(
        productId => NormalisedProducts[+productId]
    );
}

export const productsLoadingSelector = (state: State) => state.products.loading;
