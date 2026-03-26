import { FETCH_USERS_SUCCESS } from "../actions/user";
import type { Action } from "../actions";
import type { User } from "../types";
import { produce } from "immer";

export const userReducer = (state: User[] = [], action: Action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return produce(state, (draft: User[]) => {
                const users: User[] = action.payload;
                draft.push(...users);
            });
        default:
            return state;
    }
};