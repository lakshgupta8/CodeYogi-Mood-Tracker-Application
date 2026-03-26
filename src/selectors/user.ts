import type { State } from "../store";
import { createSelector } from "reselect";

export const fetchUsersSelector = createSelector(
    (state: State) => state.users,
    (users) => users
);