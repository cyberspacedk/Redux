import {combineReducers } from 'redux';  
import showModalReducer from '../Reducers/showModalReducer';
import userDataReducer from '../Reducers/userDataReducer';
import userCards from '../Reducers/userCardsReducer';


const rootReducer = combineReducers ({  
    modal : showModalReducer,
    userData: userDataReducer,
    userCards : userCards,
})

export default rootReducer; 