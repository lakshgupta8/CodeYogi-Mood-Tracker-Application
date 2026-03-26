import { type ActionCreator } from "./index";
import { type User } from "../types";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsersAction: ActionCreator<void> = () => ({
    type: FETCH_USERS,
});

export const USERS_LOADED = "USERS_LOADED";

export const usersLoadedAction: ActionCreator<User[]> = (users: User[]) => ({
    type: USERS_LOADED,
    payload: users
});