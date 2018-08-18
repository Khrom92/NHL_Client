import { createActions } from 'redux-actions';
import * as types from './StatConst'
import request from '../../utils/request';


import * as api from "../../api/getStatApi";


export const { getStats, saveTeams, savePlayer, savePlayers, saveTeam } = createActions({
    [types.GET_STATS]: (stat) => (stat),
    [types.SAVE_TEAMS]: (TEAMS) => (TEAMS),
    [types.SAVE_PLAYER]: (PLAYER) => (PLAYER),
    [types.SAVE_PLAYERS]: (PLAYERS) => (PLAYERS),
    [types.SAVE_TEAM]: (TEAM) => (TEAM),


});

export function getTeams(values) {
    return (dispatch) => {
        api.getStat(values)
            .then((data) => {
                // console.log('action team', data.data.rows);
                dispatch(saveTeams(data.data.rows))
            })
            .catch(error => console.error(error));

    }

}export function getPlayers(values) {
    return (dispatch) => {
        api.getPlayers(values)
            .then((data) => {
                console.log('action players', data.data);
                dispatch(savePlayers(data.data))
            })
            .catch(error => console.error(error));

    }

}


export function updatePlayer(values) {
    return () => {
        api.updatePlayer(values)
            .then((data) => {
                console.log(data);
            })
            .catch(error => console.error(error));

    }

}

export function getTeam(id) {
    return (dispatch) => {
        api.getTeam(id)
            .then((data) => {
                console.log(data);
                dispatch(saveTeam(data.data))

            })
            .catch(error => console.error(error));

    }

}


export function getPlayer(id) {
    return (dispatch) => {
        api.getPlayer(id)
            .then((data) => {
                console.log('1', data.data);
                dispatch(savePlayer(data.data));
                return api.getTeam(data.data.teamId);

            }).then((data) => {
                console.log('2',data.data.stats[0].splits[0]);
                dispatch(saveTeam(data.data.stats[0].splits[0]))

            })
            .catch(error => console.error(error));

    }

}


// axios.post(`registration`,values)
//     .then(res => {
//         console.log(res);
//         console.log(res.data);
//     });

