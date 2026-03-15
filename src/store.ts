import { createStore, combineReducers } from "redux";
import { sadnessReducer } from "./reducers/sadnessReducer";
import { happinessReducer } from "./reducers/happinessReducer";
import { productReducer } from "./reducers/productReducer";

export type Moment = {
    intensity: number;
    when: Date;
}

const reducer = combineReducers({
    sad: sadnessReducer,
    happy: happinessReducer,
    products: productReducer,
})

export type State = ReturnType<typeof reducer>

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
