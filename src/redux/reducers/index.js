import { combineReducers } from 'redux';
import errors from './errorsReducer';
import user from './userReducer';
import loginMode from './loginModeReducer';
import newVictimEntry from './postNewVictimReducer';
import EntryFormReducer from './EntryFormReducer';
import getFederalReducer from './getFederalReducer';
import getUsersReducer from './getUsersReducer';
import getCountyReducer from './getCountyReducer';
import updateFormReducer from './updateFormReducer';
import CustomReportInputReducer from './getCustomReducer';
import CustomReportReducer from './customReportReducer';
import updateFormAlertReducer from './updateFormAlertReducer'


const rootReducer = combineReducers({
  
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  newVictimEntry,
  EntryFormReducer,
  getFederalReducer,
  getUsersReducer,
  getCountyReducer,
  updateFormReducer,
  CustomReportInputReducer,
  CustomReportReducer,
  updateFormAlertReducer,
});

export default rootReducer;