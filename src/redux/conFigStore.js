import {combineReducers, createStore} from 'redux'

const rootReducer = combineReducers({
    // Các state dự án sẽ được khai báo ở đây 
    stateNumber: (state = 1) => {
        return state;
    }
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
