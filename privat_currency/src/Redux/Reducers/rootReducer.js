import {combineReducers } from 'redux'; 
import getCurrencyRateReducer from './getCurrencyRateReducer'; 
import converReducer from './convertReducer';
import countMoneyReducer from './countMoneyReducer'


const rootReducer = combineReducers ({  
    currencyrate: getCurrencyRateReducer, 
    converted : converReducer,
    countMoney: countMoneyReducer,
})

export default rootReducer; 