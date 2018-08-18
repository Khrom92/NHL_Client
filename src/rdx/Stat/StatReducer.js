import * as types from './StatConst';
import { handleActions } from 'redux-actions';


const initialState = {
        stat: [],
        teams: [],
        player: {},
        players: [],
        team: undefined

    };

export default handleActions(
    {
        [types.GET_STATS]: (state = initialState, action) => (
            {
                ...state,
                stat: action.payload
            }),
        [types.SAVE_TEAMS]: (state = initialState, action) => (
            {
                ...state,
                teams: action.payload
            }),
        [types.SAVE_PLAYER]: (state = initialState, action) => (
            {
                ...state,
                player: action.payload
            }),
        [types.SAVE_PLAYERS]: (state = initialState, action) => (
            {
                ...state,
                players: action.payload
            }),
        [types.SAVE_TEAM]: (state = initialState, action) => (
            {
                ...state,
                team: action.payload
            }),



    },
    initialState
);

