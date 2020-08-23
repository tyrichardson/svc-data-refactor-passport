import React, { Component } from "react";
import { connect } from "react-redux";
import AdminNav from "../Nav/AdminNav/AdminNav";
import { Card, Paper, Typography, Divider, Grid } from "@material-ui/core";
import { teal, grey } from "@material-ui/core/colors";

const mapStateToProps = (state) => ({
  user: state.user,
});

const style = {
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
};

class AdminLandingPage extends Component {

  render() {
    return (
      <div>
        <AdminNav />
        <div>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={9}>
              <Paper style={style.paper}>
                <Card style={style.titleCard}>
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", color: grey[50] }}
                  >
                    Welcome!
                  </Typography>
                </Card>
                <Card style={style.card}>
                  <Typography
                    variant="h5"
                    style={{ textAlign: "center" }}
                  >
                    Reporting, Admin Entry Tools, Data Entry
                  </Typography>
                  <br />
                  <Divider />
                  <br />
                  <Typography variant="subtitle1">
                    Federal and County reporting displays the selected report.
                    <br />
                    <br /> Custom reporting allows you to select various reporting criteria.
                    <br />
                    <br /> User Entry allows you to create or delete a user.
                    <br />
                    <br /> Search/Update allows you to bring up a specific record for reviewing, editing, or deleting.
                    <br />
                    <br /> Data Entry allows you to enter Telephone (pink form) and In-Person (yellow form) contacts.
                    <br />
                  </Typography>
                </Card>
              </Paper>
            </Grid>
            <Grid item sm={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminLandingPage);
