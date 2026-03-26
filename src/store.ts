import { createStore, combineReducers, applyMiddleware } from "redux";
import { sadnessReducer } from "./reducers/sadnessReducer";
import { happinessReducer } from "./reducers/happinessReducer";
import { productReducer } from "./reducers/productReducer";
import { orderReducer } from "./reducers/orderReducer";
import { userReducer } from "./reducers/userReducer";
import sagaMiddleware, { rootSaga } from "./Sagas";

export const reducer = combineReducers({
    sad: sadnessReducer,
    happy: happinessReducer,
    products: productReducer,
    orders: orderReducer,
    users: userReducer,
});

export type State = ReturnType<typeof reducer>

const store = createStore(
    reducer, applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
