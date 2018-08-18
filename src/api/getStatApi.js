import qs from "qs";
import request from '../utils/request';


export function getStat (values){
    return request({
        method: 'get',
        url: 'NHLTeams',
        data: qs.stringify(values),
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        }
    })
}

export function getPlayers (values){
    return request({
        method: 'get',
        url: 'player',
        data: qs.stringify(values),
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        }
    })
}

export function updatePlayer (values){
    return request({
        method: 'put',
        url: 'player/update',
        data: qs.stringify(values),
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        }
    })
}

export function getPlayer (id){
    return request({
        method: 'get',
        url: '/player/' + id,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        }
    })
}export function getTeam (id){
    return request({
        method: 'get',
        url: '/NHLTeams/stats/' + id,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        }
    })
}

