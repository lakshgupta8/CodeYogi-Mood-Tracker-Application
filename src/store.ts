import { createStore, combineReducers, applyMiddleware } from "redux";
import { sadnessReducer } from "./Reducers/sadnessReducer";
import { happinessReducer } from "./Reducers/happinessReducer";
import { productReducer } from "./Reducers/productReducer";
import { orderReducer } from "./Reducers/orderReducer";
import { userReducer } from "./Reducers/userReducer";
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
