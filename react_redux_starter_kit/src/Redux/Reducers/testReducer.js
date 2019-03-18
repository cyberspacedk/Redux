const testInput = (state ='', {type, value})=>{
    switch(type){
        case 'TEST' : return value;  
        default: return state
    }
}

export default testInput;