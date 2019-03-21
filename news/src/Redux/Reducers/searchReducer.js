const searchReducer = (state='', action) => {
  switch(action.type){
    case "FILTER" : return action.payload;
    case "RESET" : return action.payload;
    default: return state;
  }
}
export default searchReducer;