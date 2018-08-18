import { createActions } from 'redux-actions';
// import * as api from "../../api/vacanciesApi";
import * as types from './loginConst';

import * as api from "../../api/userLoginApi";


export const { userLogin, userLogout, saveUser } = createActions({
    [types.USER_LOGIN]: (token) => (token),
    [types.USER_LOGOUT]: undefined,
    [types.SAVE_USER]: (user) => (user)


});

export function loginSubmit(values) {
    return (dispatch) => {
        api.Login(values)
            .then((data) => {
                console.log(data);
                localStorage.setItem('token', data.data.token);
                dispatch(userLogin(data.data.playerId))
            })
            .catch(error => console.error(error));

    }

}


// axios.post(`registration`,values)
//     .then(res => {
//         console.log(res);
//         console.log(res.data);
//     });

