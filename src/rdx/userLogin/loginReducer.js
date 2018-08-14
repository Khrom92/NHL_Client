import * as types from './loginConst';
import { handleActions } from 'redux-actions';


const initialState = {
        auth: true,
        token: ''

    };

export default handleActions(
    {
        [types.USER_LOGIN]: (state = initialState, action = {}) => (
            {
                ...state,auth: true, token: action.payload
            }),
        [types.USER_LOGOUT]: (state = initialState) => (
            {
                ...state,auth: false, token: ''
            }),
        [types.SAVE_USER]: (state = initialState, action = {}) => (
            {
                ...state, ...action.payload
            }),

    },
    initialState
);

