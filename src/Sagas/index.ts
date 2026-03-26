import createSagaMiddleware from "redux-saga";
import { takeLeading } from "redux-saga/effects";
import { FETCH_USERS } from "../Actions/user";
import getUsersSaga from "./users";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield takeLeading(FETCH_USERS, getUsersSaga);
}

export default sagaMiddleware;