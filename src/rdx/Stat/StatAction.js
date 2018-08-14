import { createActions } from 'redux-actions';
import * as types from './StatConst'
import request from '../../utils/request';



import * as api from "../../api/getStatApi";


export const { getStats, saveTeams } = createActions({
    [types.GET_STATS]: (stat) => (stat),
    [types.SAVE_TEAMS]: (TEAMS) => (TEAMS),


});

export function getTeams(values) {
    return (dispatch) => {
        api.getStat(values)
            .then((data) => {
                console.log(data);
                dispatch(saveTeams(data.data))
            })
            .catch(error => console.error(error));

    }

}export function updatePlayer(values) {
    return () => {
        api.updatePlayer(values)
            .then((data) => {
                console.log(data);
            })
            .catch(error => console.error(error));

    }

}


// axios.post(`registration`,values)
//     .then(res => {
//         console.log(res);
//         console.log(res.data);
//     });

