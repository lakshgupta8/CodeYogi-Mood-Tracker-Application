import { createStore, type Action } from "redux";
import { HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./actions";

export type State = {
    sadCount: number;
    happyCount: number;
}

interface Actions extends Action {
    payload: number;
}

const initialState: State = {
    sadCount: 0,
    happyCount: 0
}

const reducer = (currentState: State = initialState, action: Actions): State => {
    if (action.type === HAPPY_BUTTON_CLICKED) {
        return { ...currentState, happyCount: currentState.happyCount + action.payload };
    } else if (action.type === SAD_BUTTON_CLICKED) {
        return { ...currentState, sadCount: currentState.sadCount + action.payload };
    } else {
        return currentState;
    }
}

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
