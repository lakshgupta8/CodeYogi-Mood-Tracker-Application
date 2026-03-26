import { type Moment } from "../types";
import { HAPPY_BUTTON_CLICKED, HAPPY_CLEARED } from "../Actions/mood";
import type { AnyAction } from "redux";
import { produce } from "immer";

export type State = {
    happyMoments: Moment[];
}

export const initialState: State = {
    happyMoments: []
}

export const happinessReducer = (currentState: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case HAPPY_BUTTON_CLICKED: {
            return produce(currentState, (draft: State) => {
                draft.happyMoments.push(action.payload)
            })
        }
        case HAPPY_CLEARED: {
            return produce(currentState, (draft: State) => {
                draft.happyMoments = []
            })
        }
        default: {
            return currentState
        }
    }
}
