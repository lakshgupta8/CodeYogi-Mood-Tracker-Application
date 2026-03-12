import { type Moment } from "../store";
import { SAD_BUTTON_CLICKED, SAD_CLEARED } from "../actions";
import type { AnyAction } from "redux";

export type sadState = {
    sadMoments: Moment[];
}

export const initialSadState: sadState = {
    sadMoments: []
}

export const sadnessReducer = (currentState: sadState = initialSadState, action: AnyAction) => {
    switch (action.type) {
        case SAD_BUTTON_CLICKED: {
            return {
                ...currentState,
                sadMoments: [
                    ...currentState.sadMoments,
                    { intensity: action.payload.intensity, when: action.payload.when }
                ]
            }
        }
        case SAD_CLEARED: {
            return {
                ...currentState,
                sadMoments: []
            }
        }
        default: {
            return currentState
        }
    }
}
