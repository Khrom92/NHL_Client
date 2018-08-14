import * as types from './StatConst';
import { handleActions } from 'redux-actions';


const initialState = {
        stat: [],
        teams: []

    };

export default handleActions(
    {
        [types.GET_STATS]: (state = initialState, action = {}) => (
            {
                ...state,
                stat: action.payload
            }),
        [types.SAVE_TEAMS]: (state = initialState, action = {}) => (
            {
                ...state,
                teams: action.payload
            }),


    },
    initialState
);

