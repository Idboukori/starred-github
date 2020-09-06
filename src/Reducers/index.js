import { combineReducers } from 'redux';

import RepositoryReducer from "./RepositoryReducer";

const Reducers = combineReducers({
    repos: RepositoryReducer,
});

export default Reducers;
