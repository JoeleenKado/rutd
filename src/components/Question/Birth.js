import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, Grid, Paper, withStyles, TextField } from "@material-ui/core";

const styles = {
  inputs: {
    width: "",
    paddingTop: "",
    verticalAlign: "middle",
    fontFamily: "Arial",
  },
};

class Birth extends Component {
  state = {
    vet: {
      dOB: "",
    },
  };

  handleInputChange = (event, inputProperty) => {
    console.log("Handling input-change...");
    console.log("Setting state...");

    this.setState(
      {
        vet: {
          ...this.state.vet,
          [inputProperty]: event.target.value,
          user_id: this.props.store.user.id,
        },
      },
      function () {
        console.log("state has been set:", this.state.vet);
      }
    );
  };

  saveEmail = () => {
    let vetVar = this.state.vet;

    if (vetVar.dOB === "") {
      alert("Your date of birth is required for registration.");
    } else {
      console.log(`Saving ${vetVar.dOB} to Database...`);

      this.props.dispatch({
        type: "ADD_DOB",
        payload: this.state.vet,
      });

      this.setState(
        {
          vet: {
            dOB: "",
          },
        },
        function () {
          // {this.props.history.push('/servicehistory')}
          console.log("state has been reset");
        }
      );
    }
  };

  render() {
    // const { classes } = this.props;

    return (
      <>
        <h1>Date of Birth Entry</h1>
        <Grid container spacing={2} direction="column">
          <Paper elevation={10}>
            <form>
              <br />

              <Grid item xs={12.0} sm={12}>
                <TextField
                  variant="outlined"
                  label="Date of Birth"
                  name="date_of_birth"
                  value={this.state.vet.date_of_birth}
                  onChange={(event) => this.handleInputChange(event, "dOB")}
                />
                <br />
                <Button
                  onClick={(event) => {
                    this.saveEmail(event);
                  }}
                >
                  SAVE
                </Button>
                <br />
              </Grid>
            </form>
          </Paper>
        </Grid>
      </>
    ); //END return
  } //END render
} //END Name

export default connect(mapStoreToProps)(withStyles(styles)(Birth));