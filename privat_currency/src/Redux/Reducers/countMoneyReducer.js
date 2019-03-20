const countMoneyReducer = (state=0, action)=>{
  switch(action.type){
    case "EXC" :  return action.value;
    default : return state;
  }
}

export default countMoneyReducer;