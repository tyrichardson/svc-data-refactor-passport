import React, { Component } from "react";
import { connect } from "react-redux";

import AdminNav from "../Nav/AdminNav/AdminNav";
import UserEntryPageList from "./UserEntryPageList";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {
  Paper,
  Typography,
  Card,
  Grid,
  withStyles,
  Snackbar,
  TextField,
  Radio,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { teal, grey } from "@material-ui/core/colors";

const mapStateToProps = (state) => ({
  user: state.user,
  state,
});

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1) * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
  row: {
    width: "100%",
    marginTop: theme.spacing(1) * 3,
    overflowX: "auto",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});

const style = {
  titleCard: {
    color: grey[50],
    backgroundColor: teal[300],
    padding: "20px",
    margin: "10px",
    textAlign: "center",
  },
  title: {
    color: grey[50],
  },
  paper: {
    padding: "10px",
    backgroundColor: grey[300],
  },
};
class UserEntryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      user_type: "",
      message: "",
      open: false,
      vertical: "top",
      horizontal: "center",
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: "GET_USERS_SAGA",
    });
  }
  
  registerUser = (event) => {
    event.preventDefault();
    console.log("clicked add new user submit button");
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.user_type === ""
    ) {
      this.setState({
        message: "Type a username, password, and check user type",
      });
    } else {
      const config = {
        headers: new Headers({ "Content-Type": "application/json" }),
        withCredentials: true,
      };
      const body = {
        username: this.state.username,
        password: this.state.password,
        user_type: this.state.user_type,
      };
      axios
        .post("/api/user/register/new", body, config)
        .then((response) => {
          if (response.status === 201) {
            // alert("You successfully added the new user!");
            this.handleSnackBar();
            // console.log(this.handleSnackBar(), this.state.open);
            this.props.dispatch({
              type: "GET_USERS_SAGA",
            });
            this.setState({
              username: "",
              password: "",
              user_type: "",
              message: "",
            });
          } else {
            this.setState({
              message:
                "That username might be in use already. Please try again.",
            });
          }
        })
        .catch(() => {
          this.setState({
            message:
              "Something went wrong. You can try refreshing the browser, or you may need to wait a few minutes for Heroku to restart before trying again.",
          });
        });
    }
  };

  handleInputChangeFor = (name) => (event) => {
    const target = event.target;
    const value =
      target.type === "radio" 
      ? JSON.parse(target.value) 
      : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
      }
    );
  };

  renderAlert() {
    if (this.state.message !== "") {
      return (
        <h2 className="alert" role="alert">
          {this.state.message}
        </h2>
      );
    }
    return <span />;
  }

  handleSnackBar = () => {
    this.setState({ open: true });
  };

  //SnackBar close
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    const userEntryPageList = this.props.state.getUsersReducer.map((user) => {
      return <UserEntryPageList key={user.id} user={user} />;
    });

    let content = null;

    if (this.props.user.user_type === true) {
      content = (
        <div>
          <div>
            <AdminNav />
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={3} sm={3}></Grid>
              <Grid item xs={8} sm={8}>
                <Paper style={style.paper}>
                  <Card style={style.titleCard}>
                    <Typography variant="h4" style={style.title}>
                      User Entry Page
                    </Typography>
                  </Card>
                  {this.renderAlert()}
                  <Card style={{ margin: "10px", padding: "20px" }}>
                    <h3>Add a new user:</h3>
                    <TextField
                      name="username"
                      label="Username"
                      className={classes.textField}
                      type="text"
                      margin="normal"
                      value={this.state.username}
                      onChange={this.handleInputChangeFor("username")}
                    />
                    <TextField
                      name="password"
                      label="Password"
                      className={classes.textField}
                      type="password"
                      margin="normal"
                      value={this.state.password}
                      onChange={this.handleInputChangeFor("password")}
                    />
                    <h4>User type:</h4>
                    <Radio
                      checked={`${this.state.user_type}` === "true"}
                      onChange={this.handleInputChangeFor("user_type")}
                      value="true"
                      name="user_type"
                      aria-label="Admin"
                    />
                    Admin
                    <Radio
                      checked={`${this.state.user_type}` === "false"}
                      onChange={this.handleInputChangeFor("user_type")}
                      value="false"
                      name="user_type"
                      aria-label="Standard"
                    />
                    Standard
                    <div style={{ float: "right", marginRight: "12px" }}>
                      <Button
                        name="submit"
                        variant="text"
                        color="primary"
                        onClick={this.registerUser}
                      >
                        Submit
                      </Button>
                    </div>
                  </Card>
                  <Card style={{ margin: "10px", padding: "20px" }}>
                    <div>
                      <h4>Current users:</h4>
                      <span style={{fontSize: '16px'}}><em>** don't delete last Admin user **</em></span>
                    </div>
                    <div>{userEntryPageList}</div>
                  </Card>
                </Paper>
              </Grid>
              <Grid item sm={1}></Grid>
            </Grid>
          </div>
        </div>
      );
    }

    const { vertical, horizontal, open } = this.state;

    let snackbar = (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={this.handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">User added</span>}
      />
    );

    return (
      <div>
        <div>{content}</div>
        <div>{snackbar}</div>
      </div>
    );
  }
}

UserEntryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(UserEntryPage));
