import {
    FETCH_REPOS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE
} from "../Actions/types";

const INIT_STATE ={
    loading: false,
    error : null,
    repositories : []
};


export default (state = INIT_STATE,action) =>{
    switch (action.type) {
        case FETCH_REPOS:
            return{...state,loading: true, error: false};
        case FETCH_REPOS_SUCCESS:
            return{...state,loading: false, repositories: [...state.repositories , ...action.payload.items]};
        case FETCH_REPOS_FAILURE:
            return{...state, loading: false, error: true};
        default:
            return {...state}
    }
}

