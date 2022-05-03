export default function (state = 0,action){
    //estado inicial pode ser 0, {}, ou qualquer outro

switch(action.type){
    case 'SUBTRACT': 
    return action.payload[0] - action.payload[1]

    case 'SUM':
        return action.payload[0] + action.payload[1]
    default:
        return state

    }
}