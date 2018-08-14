import axios from 'axios';
import qs from "qs";

export function Login (values){
    return axios({
        method: 'post',
        url: 'authenticate',
        data: qs.stringify(values),
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    })
}
