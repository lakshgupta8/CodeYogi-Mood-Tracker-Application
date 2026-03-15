import type { State } from "../store";

export const productSelector = (state: State) => state.products.products;

export const loadingSelector = (state: State) => state.products.loading;

export const errorSelector = (state: State) => state.products.error;