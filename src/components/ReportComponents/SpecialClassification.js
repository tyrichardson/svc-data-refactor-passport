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

class SpecialClassification extends Component {
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
      <section className="total">
        <h4>Types of Victimization: Special classification of individuals</h4>
        <Table className="federalTable">
          <TableHead>
            <TableRow>
              <TableCell>Types of Individuals</TableCell>
              <TableCell>Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Deaf/Hard of Hearing</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.disability_deaf}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Homeless</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.homeless}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Immigrants/Refugees/Asylum Seekers</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.victim_immigrant}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>LGBTQ</TableCell>
              <TableCell>{this.props.state.getFederalReducer.lgbtq}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Veterans</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.veteran}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Victims with Disabilities: Cognitive/Physical/Mental
              </TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.victims_with_disabilities}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Victims with Limited English Proficiency</TableCell>
              <TableCell>
                {this.props.state.getFederalReducer.limited_english}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    );
  }
}
export default connect(mapStateToProps)(SpecialClassification);
