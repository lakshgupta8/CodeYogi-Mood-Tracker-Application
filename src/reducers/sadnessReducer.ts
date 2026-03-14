import { type Moment } from "../store";
import { SAD_BUTTON_CLICKED, SAD_CLEARED } from "../actions";
import type { AnyAction } from "redux";
import { produce } from "immer";

export type State = {
    sadMoments: Moment[];
}

export const initialState: State = {
    sadMoments: []
}

export const sadnessReducer = (currentState: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case SAD_BUTTON_CLICKED: {
            return produce(currentState, (draft: State) => {
                draft.sadMoments.push(action.payload)
            })
        }
        case SAD_CLEARED: {
            return produce(currentState, (draft: State) => {
                draft.sadMoments = []
            })
        }
        default: {
            return currentState
        }
    }
}
