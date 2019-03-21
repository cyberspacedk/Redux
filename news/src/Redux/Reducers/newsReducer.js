const newsReducer = (state=[], action)=>{
  switch(action.type){
    case "GETALLNEWS": return action.payload;
    default : return state;
  }
}
export default newsReducer;