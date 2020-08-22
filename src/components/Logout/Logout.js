import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {Button} from '@material-ui/core';


const mapStateToProps = state => ({
  state
});

class Logout extends Component {
  
  logout = () => {
    this.props.dispatch({type: 'LOGOUT'});
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <Button style={{color: 'white'}} onClick={this.logout}>Logout</Button>
      </div>
    );
  }
}

let routerLogout = withRouter(Logout);

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(routerLogout);
