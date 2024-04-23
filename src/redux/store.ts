import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { fileUploaderReducer } from "../modules/file-uploader";

import { runAllSagas } from "./sagas-runners";

const combinedReducers = combineReducers({
  fileUploader: fileUploaderReducer,
});

const sagaMiddleware = createSagaMiddleware();
// @ts-expect-error Support of chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

runAllSagas(sagaMiddleware);

export default store;
