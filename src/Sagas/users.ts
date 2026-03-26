import { call, put } from "redux-saga/effects";
import { fetchUsersSuccessAction } from "../actions/user";
import { getUsers } from "../api";

export function* getUsersSaga(): Generator {
    const data = yield call(getUsers);
    yield put(fetchUsersSuccessAction(data));

}

export default getUsersSaga;