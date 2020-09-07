import {
    FETCH_REPOS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE
} from './types';

import Api from "../API";


const fetchRepositories = ()=>({
    type : FETCH_REPOS
});

const fetchRepositoriesSuccess = (data)=>({
    type : FETCH_REPOS_SUCCESS,
    payload : data
});

const fetchRepositoriesFailure = (error)=>({
    type : FETCH_REPOS_FAILURE,
    payload : error
});

export const getRepositories = (last30days,page) => dispatch =>{
    dispatch(fetchRepositories);
    Api()
        .getrepos(last30days,page).then(res => res.json()).then( json =>{
        dispatch(fetchRepositoriesSuccess(json));
    }).catch(error => {
        dispatch(fetchRepositoriesFailure(error.message))
    })
};
