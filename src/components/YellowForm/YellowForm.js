import React, { Component } from "react";
import { connect } from "react-redux";

import InPersonContactInfo from "../FormComponents/ContactInfo/InPersonContactInfo";
import InPersonServices from "../FormComponents/InPersonServices/InPersonServices";
import UnmetNeeds from "../FormComponents/UnmetNeeds/UnmetNeeds";
import Referrals from "../FormComponents/Referrals/Referrals";
import Demographics from "../FormComponents/Demographics/Demographics";
import UserNav from "../Nav/UserNav/UserNav";
import AdminNav from "../Nav/AdminNav/AdminNav";
import SubmitDialog from "../FormComponents/SubmitDialog/SubmitDialog";

import { Paper, Typography, Card, Grid } from "@material-ui/core";

const mapStateToProps = (state) => ({
  user: state.user,
  state,
});

const style = {
  title: {
    backgroundColor: "#FFF9C4",
    textAlign: "center",
    color: "#616161",
    padding: "10px",
  },
  paper: {
    backgroundColor: "#FFFDE7",
    padding: "10px",
  },
};

class YellowForm extends Component {
  constructor() {
    super();
    this.state = {
      contact_type: "in-person",
    };
  }

  handleSubmit = () => {
    this.props.dispatch({
      type: "ADD_NEW_VICTIM",
      payload: { ...this.state, ...this.props.state.EntryFormReducer },
    });
    this.props.history.push("/in-person");
    this.forceUpdate();
  };

  renderDemographics = () => {
    const { EntryFormReducer } = this.props.state;
    if (
      EntryFormReducer.victim_prior_contact === false ||
      EntryFormReducer.victim_contact_prior_oct === false
    ) {
      return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Demographics dispatchTo={"ENTRY_FORM_DATA"} />
        </Grid>
      );
    }
    return null;
  };

  render() {
    let DataEntryNav;
    if (this.props.user.user_type === true) {
      DataEntryNav = <AdminNav />;
    } else if (this.props.user.user_type === false) {
      DataEntryNav = <UserNav />;
    }
    return (
      <div>
        {DataEntryNav}
        <div>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={6} sm={3} md={3}></Grid>
            <Grid item xs={6} sm={8} md={8}>
              <Paper style={style.paper}>
                <Card style={{ margin: "10px" }}>
                  <Typography variant="h4" style={style.title}>
                    In-Person Contact Form for Primary AND Secondary Victims
                  </Typography>
                </Card>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <InPersonContactInfo dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <InPersonServices dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <UnmetNeeds dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Referrals dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                {this.renderDemographics()}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <SubmitDialog
                    handleSubmit={this.handleSubmit}
                    text={"Submit"}
                  />
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(YellowForm);
