import { USERS_LOADED } from "../Actions/user";
import type { Action } from "../Actions";
import type { User } from "../types";
import { produce } from "immer";

export const userReducer = (state: User[] = [], action: Action) => {
    switch (action.type) {
        case USERS_LOADED:
            return produce(state, (draft: User[]) => {
                const users: User[] = action.payload;
                draft.push(...users);
            });
        default:
            return state;
    }
};