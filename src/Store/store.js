import {combineReducers, createStore, applyMiddleware} from "redux";
import reducers from '../Reducers';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        reducers
    }),
    {} ,
    applyMiddleware(thunk)
);

export default store;

