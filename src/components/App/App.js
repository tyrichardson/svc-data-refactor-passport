import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Header from '../Header/Header';
import LoginPage from '../LoginPage/LoginPage';
import DataEntryPage from '../DataEntryPage/DataEntryPage';
import PinkForm from '../PinkForm/PinkForm';
import YellowForm from '../YellowForm/YellowForm';
import FederalReport from '../FederalReport/FederalReport';
import CountyReport from '../CountyReport/CountyReport';
import CustomReport from '../CustomReport/CustomReport';
import UserLandingPage from '../UserLandingPage/UserLandingPage';
import AdminLandingPage from '../AdminLandingPage/AdminLandingPage';
import UserEntryPage from '../UserEntryPage/UserEntryPage';
import SearchUpdatePage from '../SearchUpdatePage/SearchUpdatePage';
import CustomReportOutput from '../CustomReport/CustomReportOutput';
import '../styles/main.css';
import { teal, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[300],
    },
    secondary: {
      main: grey[700]
    },
  }
});

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
    <MuiThemeProvider theme={theme}>
    <div>
      <Header />
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route
            exact
            path="/login"
            component={LoginPage}
          />
          <ProtectedRoute
            exact
            path="/telephone"
            component={PinkForm}
          />
          <ProtectedRoute
            exact
            path="/in-person"
            component={YellowForm}
          />
          <ProtectedRoute
            exact 
            path="/data_entry_page"
            component={DataEntryPage}
          />
          <ProtectedRoute
            exact
            path="/federal_report"
            component={FederalReport}
          />
          <ProtectedRoute
            exact
            path="/county_report"
            component={CountyReport}
          />
          <ProtectedRoute
            exact
            path="/custom_report"
            component={CustomReport}
          />
          <ProtectedRoute
            exact
            path="/userlandingpage"
            component={UserLandingPage}
          />
          <ProtectedRoute
            exact
            path="/adminlandingpage"
            component={AdminLandingPage}
          />
          <ProtectedRoute
            exact
            path="/user_entry_page"
            component={UserEntryPage}
          />
          <ProtectedRoute
            exact 
            path="/search_and_update"
            component={SearchUpdatePage}
          />
          <ProtectedRoute
            exact
            path="/custom_report_output"
            component={CustomReportOutput}
          />
          {/* OTHERWISE (no path!) */}
          <Route render={() => <h1>404</h1>} />

        </Switch>
      </Router>
    </div>
    </MuiThemeProvider>
  )}
}

export default connect()(App);
