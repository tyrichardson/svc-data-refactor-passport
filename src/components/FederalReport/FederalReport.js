import React, { Component } from "react";
import { connect } from "react-redux";
import AdminNav from "../Nav/AdminNav/AdminNav";

//Style
import { Paper, Typography, Card, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { teal, grey } from "@material-ui/core/colors";

//ReportComponents
import FederalDate from "../ReportComponents/Date/FederalDate";
import FederalTotalVictims from "../ReportComponents/Total/FederalTotalVictims";
import FederalEthnicity from "../ReportComponents/Ethnicity/FederalEthnicity";
import FederalGender from "../ReportComponents/Gender/FederalGender";
import FederalAgeRange from "../ReportComponents/Age/FederalAgeRange";
import FederalVictimization from "../ReportComponents/Victimization/FederalVictimization";
import SpecialClassification from "../ReportComponents/SpecialClassification";
import CompensationApplication from "../ReportComponents/CompensationApplication";
import InformationReferral from "../ReportComponents/InformationReferral(A)";
import AdvocacyAccompaniment from "../ReportComponents/AdvocacyAccompaniment/AdvocacyAccompaniment(B)";
import EmotionalSupport from "../ReportComponents/EmotionalSupport(C)";
import CriminalCivilJusticeSystemAssistance from "../ReportComponents/CriminalCivilJusticeSystemAssistance(E)";
import NewVictimsFederal from "../ReportComponents/New/NewVictimsFederal";

const mapStateToProps = (state) => ({
  user: state.user,
  person: state.getFederalReducer,
  state,
});
const style = {
  title: {
    backgroundColor: teal[300],
    textAlign: "center",
    color: "white",
    padding: "10px",
  },
  paper: {
    backgroundColor: grey[300],
    padding: "10px",
  },
};
const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  group: {
    margin: `${theme.spacing(1)}px 0`,
  },
});

class FederalReport extends Component {

  render() {
    return (
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
                <Card style={{ margin: "10px" }}>
                  <Typography variant="h4" style={style.title}>
                    Federal Report
                  </Typography>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FederalDate />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FederalTotalVictims />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <NewVictimsFederal />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FederalEthnicity />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FederalGender />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FederalAgeRange />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FederalVictimization />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <SpecialClassification />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <h1> Direct Services</h1>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CompensationApplication />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <InformationReferral />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <AdvocacyAccompaniment />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <EmotionalSupport />
                  </Grid>
                </Card>
                <Card style={{ margin: "10px", padding: "20px" }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CriminalCivilJusticeSystemAssistance />
                  </Grid>
                </Card>
              </Paper>
              <Grid item xs={1} sm={1}></Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

FederalReport.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(FederalReport));
