import { type Moment } from "../store";
import { HAPPY_BUTTON_CLICKED, HAPPY_CLEARED } from "../actions";
import type { AnyAction } from "redux";

export type happyState = {
    happyMoments: Moment[];
}

export const initialHappyState: happyState = {
    happyMoments: []
}

export const happinessReducer = (currentState: happyState = initialHappyState, action: AnyAction) => {
    switch (action.type) {
        case HAPPY_BUTTON_CLICKED: {
            return {
                ...currentState,
                happyMoments: [
                    ...currentState.happyMoments,
                    { intensity: action.payload.intensity, when: action.payload.when }
                ]
            }
        }
        case HAPPY_CLEARED: {
            return {
                ...currentState,
                happyMoments: []
            }
        }
        default: {
            return currentState
        }
    }
}
