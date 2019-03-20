const editModeReducer = (state = false, action)=>{
  switch(action.type){
    case "EDITMODE" : return true;
    case "CLOSEEDITMODE": return false;
    default : return state;
  }
}
export default editModeReducer;