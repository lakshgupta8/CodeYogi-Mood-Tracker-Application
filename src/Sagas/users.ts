import { call, put } from "redux-saga/effects";
import { usersLoadedAction } from "../Actions/user";
import { getUsers } from "../api";

export function* getUsersSaga(): Generator {
    try {
        const data = yield call(getUsers);
        yield put(usersLoadedAction(data));
    }
    catch (error) {
        console.log(error);
    }
}

export default getUsersSaga;