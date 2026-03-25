import { createStore, combineReducers } from "redux";
import { sadnessReducer } from "./reducers/sadnessReducer";
import { happinessReducer } from "./reducers/happinessReducer";
import { productReducer } from "./reducers/productReducer";
import { orderReducer } from "./reducers/orderReducer";

export const reducer = combineReducers({
    sad: sadnessReducer,
    happy: happinessReducer,
    products: productReducer,
    orders: orderReducer,
});

export type State = ReturnType<typeof reducer>

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
