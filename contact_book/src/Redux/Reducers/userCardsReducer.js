
 

const userCards = (state=[], action)=>{
  switch(action.type){
    case "CREATE" : 
    action.edit ?
    localStorage.setItem('users', JSON.stringify(state.map(el => el.id == action.data.id ? {...el, ...action.data} : el)))
    :
    localStorage.setItem('users', JSON.stringify( [...state, {...action.data, id: Date.now()}] )); 
    
    return action.edit ? state.map(el => el.id == action.data.id ? {...el, ...action.data} : el) : [...state, {...action.data, id: Date.now()}];

    case "GETFROM" : return localStorage.getItem('users') ? 
                      [...JSON.parse(localStorage.getItem('users'))] : state;
    default : return state;
  }
}
export default userCards; 