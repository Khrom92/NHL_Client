import * as types from './loginConst';
import { handleActions } from 'redux-actions';


const initialState = {
        auth: true,
        id: '34'

    };

export default handleActions(
    {
        [types.USER_LOGIN]: (state = initialState, action = {}) => (
            {
                ...state,auth: true, id: action.payload
            }),
        [types.USER_LOGOUT]: (state = initialState) => (
            {
                ...state,auth: false, id: ''
            }),
        [types.SAVE_USER]: (state = initialState, action = {}) => (
            {
                ...state, ...action.payload
            }),

    },
    initialState
);

