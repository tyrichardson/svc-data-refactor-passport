import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import postNewVictimSaga from './postNewVictimSaga';
import getFederalSaga from './getFederalSaga';
import getUsersSaga from './getUsersSaga';
import deleteUserSaga from './deleteUserSaga';
import searchAndUpdateSaga from './searchAndUpdateSaga';
import getCountySaga from './getCountySaga';
import getCustomSaga from './getCustomSaga'
import deleteFormSaga from './deleteFormSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    postNewVictimSaga(),
    getFederalSaga(),
    getUsersSaga(),
    deleteUserSaga(),
    getCountySaga(),
    deleteFormSaga(),
    getCustomSaga(),
    searchAndUpdateSaga(),
  ]);
}
