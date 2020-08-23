import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


//getting victim data from database by date range for federal report
function* getPerson(action) {
    console.log('in get saga')
    try {
        // const person = yield call(getPerson)
        const {startDate, endDate} = action.payload;
        yield console.log('get victim data for federal report', action.payload);
        const personDataResponse = yield call(axios.get, `/api/fed-report/?startDate=${startDate}&endDate=${endDate}`);
       yield put ({
           type: 'SET_PERSON_DATA',
           payload: personDataResponse.data[0]
       })
    } catch (error) {
        console.log('error in GET', error)
    }
}

function* getFederalSaga() {
    yield takeEvery('GET_PERSON_DATA', getPerson)
}

export default getFederalSaga;