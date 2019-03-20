const converReducer = (state=0,action)=>{
  switch(action.type){
    case "BTC": return  action.base * action.bid * 27;
    case action.type: return  action.base * action.bid ; 
    default : return state;
  }
}
export default converReducer;