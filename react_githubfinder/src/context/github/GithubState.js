import React, { useReducer } from 'react';
import axios from 'axios';
import GitHubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

const GithubState = props => {
    const initialState = {
        user: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);
    // Search users
    // Get user
    // Get repos
    // Clear Users
    // Set loading
    return <GitHubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        }}
    >
        {props.children}
    </GitHubContext.Provider>
}

export default GithubState
