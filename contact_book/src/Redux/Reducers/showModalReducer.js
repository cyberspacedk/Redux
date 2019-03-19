
const showModalReducer = (store = false, action)=>{
  switch(action.type){
    case "SHOWMODAL" : return true;
    case "HIDEMODAL" : return false;
    default : return store;
  }
}
export default showModalReducer;