import createSagaMiddleware from "redux-saga";
import { takeLeading } from "redux-saga/effects";
import { FETCH_USERS_REQUEST } from "../actions/user";
import getUsersSaga from "./users";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield takeLeading(FETCH_USERS_REQUEST, getUsersSaga);
}

export default sagaMiddleware;