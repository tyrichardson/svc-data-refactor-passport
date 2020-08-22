import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Toolbar,
  AppBar,
  Paper,
  Card,
  TextField,
  Button,
} from "@material-ui/core";
import { teal, grey } from "@material-ui/core/colors";

const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.errors,
});

const styles = (theme) => ({
  card: {
    padding: "20px",
    margin: "10px",
  },
  titleCard: {
    color: grey[50],
    backgroundColor: teal[300],
    padding: "20px",
    margin: "10px",
  },
  paper: {
    padding: "10px",
    backgroundColor: grey[300],
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });

    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user && this.props.user.user_type === true) {
      this.props.history.push("/adminlandingpage");
    } else if (this.props.user !== prevProps.user && this.props.user.user_type === false) {
      this.props.history.push("/userlandingpage");
    }
    return <span />;
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  renderAlert() {
    if (this.props.errors.loginMessage !== "") {
      return (
        <h2 className="alert" role="alert">
          {this.props.errors.loginMessage}
        </h2>
      );
    }
    return <span />;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Header />
            <Typography
              variant="h4"
              color="inherit"
              style={{ paddingLeft: "20px", color: "#FAFAFA" }}
            >
              Data Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: "100px" }}>
          {this.renderAlert()}
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item sm={4}></Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <div>
                  <Card className={classes.titleCard}>
                    <Typography
                      variant="h4"
                      style={{ textAlign: "center", color: grey[50] }}
                    >
                      Login
                    </Typography>
                  </Card>
                  <Card className={classes.card}>
                    <div>
                      <TextField
                        name="username"
                        label="Username"
                        className={classes.textField}
                        type="text"
                        margin="normal"
                        value={this.state.username}
                        onChange={this.handleInputChangeFor("username")}
                      />
                    </div>
                    <div>
                      <TextField
                        name="password"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        margin="normal"
                        value={this.state.password}
                        onChange={this.handleInputChangeFor("password")}
                      />
                    </div>
                    <div style={{ float: "right" }}>
                      <Button variant="contained" onClick={this.login}>
                        Log In
                      </Button>
                    </div>
                  </Card>
                </div>
              </Paper>
            </Grid>
            <Grid item sm={4}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(LoginPage));
