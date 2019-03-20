import {combineReducers } from 'redux';  
import showModalReducer from '../Reducers/showModalReducer';
import userDataReducer from '../Reducers/userDataReducer';
import userCards from '../Reducers/userCardsReducer';
import editModeReducer from './editModeReducer';


const rootReducer = combineReducers ({  
    modal : showModalReducer,
    userData: userDataReducer,
    userCards : userCards,
    editMode: editModeReducer,
})

export default rootReducer; 