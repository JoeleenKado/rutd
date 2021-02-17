import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../AdminVetView/AdminVetView.css";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

// import Button from '@material-ui/core/Button';

// TO DO LIST ON THIS PAGE:
// - Rename this component to AdminResourceView
// - Edit button to allow admins to edit organization profile
// - create saga with PUT route to update organization
// - create reducer to accept updated organization details
// - this.props.history.push('/adminResourceEdit')


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#F5F5F5'
  },
});

class AdminResourceEdit extends Component {
  state = {
    heading: "Admin Organization View",
    name: "",
  };

  handleChange = () => {
    console.log("WOOT");
  };

  goBackHome = () => {
    console.log("Going back to Admin Landing Page");
    this.props.history.push("/adminlanding");
  };

  editOrganization = (id) => {
    console.log("Editing Organization with ID:", id);
    this.props.history.push("/adminOrgEdit", id)
  }

  render() {
    // line below is equivalent to this.props.store.details
    const { resourceDetails } = this.props.store;
        const { classes } = this.props;
          return (
            <div className="container">
              <center>
                {/* {JSON.stringify(this.props.store.resourceDetails)} */}
                <h1 className="grey">{this.state.heading}</h1>
              </center>

                  <div>
                    <Paper className={classes.root} elevation={1}>
                      <hr className="hr-width"></hr>
                      <br></br>
                      <Typography variant="h5" component="h3">
                        Organization Details
                      </Typography>
                      <Typography component="p">
                        Name: {resourceDetails.name}
                      </Typography>
                      <Typography component="p">
                        Number: {resourceDetails.number}
                      </Typography>
                      <Typography component="p">
                        Email: {resourceDetails.email}
                      </Typography>
                      <Typography component="p">
                        City: {resourceDetails.city}
                      </Typography>
                      <Typography component="p">
                        State: {resourceDetails.state}
                      </Typography>
                      <Typography component="p">
                        <a href>Website:{ resourceDetails.website}</a>
                      </Typography>
                      <Typography component="p">
                        Description: {resourceDetails.description}
                      </Typography>
                      <Typography component="p">
                        Categories: {resourceDetails.categories}
                      </Typography>
                      {/* <Typography component="p">
                        PLACEHOLDER FOR PDF
                      </Typography>
                      <Typography component="p">
                        PLACEHOLDER FOR PICTURES
                      </Typography> */}
                      <hr className="hr-width"></hr>
                    </Paper>
                    <br></br>
                    <Fab  
                      className="edit-org-btn" variant="contained" 
                      style={{
                        borderRadius: 35,
                        backgroundColor: '#AFFA3D',
                        fontFamily: 'orbitron',
                      }}
                      onClick={() => this.editOrganization(resourceDetails.org_id)}>
                        <EditRoundedIcon />
                    </Fab>
                  </div>
                <center>
                  <Fab 
                    className="admin-landing-button" variant="contained"
                    style={{
                      borderRadius: 35,
                      backgroundColor: '#AFFA3D',
                      fontFamily: 'orbitron',
                    }}
                    onClick={this.goBackHome}><HomeRoundedIcon /></Fab>
                    <span>&nbsp;&nbsp;</span>
                </center>
            </div>
          );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminResourceEdit));
