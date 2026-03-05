import { createStore, type Action } from "redux";

export type State = {
    sadCount: number;
    happyCount: number;
}

const initialState: State = {
    sadCount: 0,
    happyCount: 0
}

const reducer = (currentState: State = initialState, action: Action): State => {
    if (action.type === "happy button clicked") {
        return { ...currentState, happyCount: currentState.happyCount + 1 };
    } else if (action.type === "sad button clicked") {
        return { ...currentState, sadCount: currentState.sadCount + 1 };
    } else {
        return currentState;
    }
}

const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
