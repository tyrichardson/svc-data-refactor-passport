import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


//getting victim data based on dates from county report page
function* getCounty(action) {
    console.log('in getCounty saga')
    try {
        // const person = yield call(getPerson)
        const county = action.payload.county;
        const startDate = action.payload.startDate;
        const endDate = action.payload.endDate;

        yield console.log('get data for county report');
        const personCountyDataResponse = yield call(axios.get, `/api/county-report/?county=${county}&startDate=${startDate}&endDate=${endDate}`);
       yield put ({
           type: 'SET_PERSON_DATA_COUNTY',
           payload: personCountyDataResponse.data
       })
    } catch (error) {
        console.log('error in GET County', error)
    }
}

function* getCountySaga() {
    yield takeEvery('GET_PERSON_DATA_COUNTY', getCounty)
}

export default getCountySaga;