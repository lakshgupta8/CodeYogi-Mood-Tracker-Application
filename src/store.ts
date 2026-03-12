import { createStore, type AnyAction } from "redux";
import { sadnessReducer, initialSadState, type sadState } from "./reducers/sadnessReducer";
import { happinessReducer, initialHappyState, type happyState } from "./reducers/happinessReducer";

export type Moment = {
    intensity: number;
    when: Date;
}

export type State = {
    sad: sadState;
    happy: happyState;
}

const initialState: State = {
    happy: initialHappyState,
    sad: initialSadState
}

const reducer = (currentState: State = initialState, action: AnyAction): State => {
    return {
        sad: sadnessReducer(currentState.sad, action),
        happy: happinessReducer(currentState.happy, action)
    }
}

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
