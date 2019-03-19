const initialState = {
  firstname: '',
  lastname: '',
  phone: '',
  email:'',
  date:'',
  id: Date.now(),
}

const userDataReducer = (state=initialState, action)=>{
  switch(action.type){
    case 'FIRSTNAME': return {...state, [action.name]:action.value};
    case 'LASTNAME': return {...state, [action.name]:action.value};
    case 'PHONE': return {...state, [action.name]:action.value};
    case 'EMAIL': return {...state, [action.name]:action.value};
    case 'DATE': return {...state, [action.name]:action.value};
    case 'CLEAR': return initialState;
    default: return state;
  }
}


export default userDataReducer;