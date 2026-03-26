import { type ActionCreator } from "./index";
import { type User } from "../types";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";

export const fetchUsersRequestAction = () => ({
    type: FETCH_USERS_REQUEST,
});

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

export const fetchUsersSuccessAction: ActionCreator<User[]> = (users: User[]) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});