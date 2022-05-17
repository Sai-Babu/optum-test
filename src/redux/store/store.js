import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { enableBatching } from 'redux-batched-actions';
import rootSaga from '../../saga/rootSaga';
import rootReducer from "../reducers/index"


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  enableBatching(rootReducer),
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;