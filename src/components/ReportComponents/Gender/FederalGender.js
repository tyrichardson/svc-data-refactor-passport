import React, { Component } from "react";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const mapStateToProps = (state) => ({
  user: state.user,
  person: state.getFederalReducer,
  state,
});

class FederalGender extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
    };
  }

  handleChangeFor = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  submit = () => {
    this.props.dispatch({
      type: "GET_PERSON_DATA",
      payload: this.state,
    });
  };

  render() {
    return (
      <section className="gender">
        <h4>Demographics: Gender Identity</h4>
        <Table className="federalTable">
          <TableHead>
            <TableRow>
              <TableCell>Gender Identity</TableCell>
              <TableCell>Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Male</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.victim_gender_male}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Female</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.victim_gender_female}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Non-Binary</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.victim_gender_non_binary}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Other</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.victim_gender_other}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Not Reported</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.victim_gender_unknown}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total:</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.total_gender_count}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    );
  }
}
export default connect(mapStateToProps)(FederalGender);
