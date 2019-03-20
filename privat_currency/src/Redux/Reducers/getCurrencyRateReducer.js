const getCurrencyRateReducer = (state = [], action)=> {
  switch(action.type){
    case "EXCHANGERATE" : return  action.data.data ;
    default: return state;
  }
}

export default getCurrencyRateReducer; 