
const counter = (state=0, action) => {
    switch(action.type){
        case 'PLUS': return state + action.number;
        case 'MINUS': return state - action.number;
        case 'RESET': return 0;
        default : return state;
    }
}

export default counter; 