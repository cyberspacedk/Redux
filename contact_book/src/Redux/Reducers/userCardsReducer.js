
 

const userCards = (state=[], action)=>{
  switch(action.type){
    case "CREATE" : localStorage.setItem('users', JSON.stringify([...state, action.data]));
                    return [...state, action.data];
    case "GETFROM" : return localStorage.getItem('users') ? 
                      [...JSON.parse(localStorage.getItem('users'))] : state;
    default : return state;
  }
}
export default userCards; 