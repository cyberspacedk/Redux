import {combineReducers } from 'redux';  
import newsReducer from './newsReducer'
import searchReducer from './searchReducer';


const rootReducer = combineReducers ({  
    news: newsReducer,
    filter: searchReducer
})

export default rootReducer; 