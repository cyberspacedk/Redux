import {combineReducers } from 'redux'; 
import testInput from './testReducer';


const rootReducer = combineReducers ({  
    testValue: testInput,
})

export default rootReducer; 