
const getCountyReducer = (state = {}, action )=> {
    if (action.type=== 'SET_PERSON_DATA_COUNTY'){
        console.log('in get person reducer');
        return {...action.payload}   
    }return state;
}
export default getCountyReducer;