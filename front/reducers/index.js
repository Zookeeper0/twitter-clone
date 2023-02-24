
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';
//combineReducers가 user, post의 initialstate들을 알아서 합쳐준다,
const rootReducer = combineReducers({
    //HYDRATE 를 위해서 index 리듀서 추가
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;