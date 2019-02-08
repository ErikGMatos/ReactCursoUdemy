import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

import { loadState, saveState } from "./localStorage";

const localStorageState = loadState();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    localStorageState,
    composEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

store.subscribe(() => {
    
    saveState({ list: store.getState().list });
});

export default store;
