

const getFederalReducer = (state = {}, action )=> {
    if (action.type=== 'SET_PERSON_DATA'){
        console.log('in get person reducer');
        return {...action.payload}   
    }return state;
}
export default getFederalReducer;