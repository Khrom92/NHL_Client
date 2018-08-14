import loginReducer from './userLogin/loginReducer';
import StatReducer from './Stat/StatReducer';
import { reducer as formReducer } from 'redux-form'


export default {
    loginReducer,
    form: formReducer,
    StatReducer
};