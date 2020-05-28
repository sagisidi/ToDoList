import {combineReducers} from 'redux';
import changeTaskFieldReducer from './changeTaskFieldReducer';
import addTaskReducer from './addTaskReducer';

const rootReducers =combineReducers({
    changeTaskFieldReducer:changeTaskFieldReducer,
    addTaskReducer:addTaskReducer
});

export default rootReducers;
