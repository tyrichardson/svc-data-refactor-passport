import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Typography, Card, Button, TextField } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { teal, grey } from "@material-ui/core/colors";

const mapStateToProps = (state) => ({
  user: state.user,
  county: state.getCountyReducer,
  state,
});

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    Width: 200,
  },
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

class DateCustom extends Component {

  render() {
    
    return (
      <div>
        <Card style={{ margin: "10px" }}>
          <Typography variant="h4" style={style.title}>
            Custom Report
          </Typography>
        </Card>
        <Card style={{ margin: "10px", padding: "20px" }}>
          <form onSubmit={this.props.submitCustomReport}>
            <div style={{ float: "left", padding: "10px" }}>
              <TextField
                name="startDate"
                label=" Start Date"
                className={this.props.textField}
                type="date"
                margin="normal"
                value={this.props.startDate}
                onChange={this.props.handleChangeForStartDate}
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <div style={{ float: "left", padding: "10px" }}>
              <TextField
                name="endDate"
                label=" End Date"
                className={this.props.textField}
                type="date"
                margin="normal"
                value={this.props.endDate}
                onChange={this.props.handleChangeForEndDate}
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <br />
            <div style={{ float: "left", padding: "10px" }}>
              <Radio
                checked={`${this.props.querySelector}` === "and"}
                onChange={this.props.handleChangeForQuerySelector}
                value="and"
                name="and"
                aria-label="and"
              />
              and
              <Radio
                checked={`${this.props.querySelector}` === "or"}
                onChange={this.props.handleChangeForQuerySelector}
                value="or"
                name="or"
                aria-label="or"
              />
              or
              <Radio
                checked={`${this.props.querySelector}` === "all"}
                onChange={this.props.handleChangeForQuerySelector}
                value="all"
                name="all"
                aria-label="all"
              />
              all
              <br />
            </div>
            <Button
              name="submit"
              variant="text"
              color="primary"
              onClick={this.props.submitCustomReport}
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}
DateCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(DateCustom));
