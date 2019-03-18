import {combineReducers } from 'redux';

import counter from './counter';
import inputValue from './inputValue';
import submitReducer from './submitReducer';


const rootReducer = combineReducers ({
    counter,
    input: inputValue,
    history: submitReducer,
})

export default rootReducer;