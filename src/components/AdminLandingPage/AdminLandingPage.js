import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import "../AdminLandingPage/AdminLandingPage.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

class AdminLandingPage extends Component {
// Fetching veteran list from DB
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_VET" });
  }

// "VETERAN YOU SELECTED:"
  handleVeteran = (veteranID) => {
      this.props.dispatch({type:'GET_ONE_VET', payload: veteranID});
    this.props.history.push("/adminVetView", veteranID);
  };
// "RESOURCE YOU SELECTED"
  handleResource = (resourceID) => {
    this.props.dispatch({type: 'GET_ONE_RESOURCE', payload: resourceID})
    this.props.history.push("/adminOrgView", resourceID);
  };

// Table to display all of the veterans and the timestamp they connected with the vet.
  render(){
    const {classes} = this.props;
    const {vetReducer} = this.props.store;
      return (
        <div className="container">
        <center>
        <h1 className="grey">Connections In Progress</h1>
        </center>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead className="table-head-color">
                  <TableRow>
                    <TableCell>Veterans</TableCell>
                    <TableCell align="right">Organizations</TableCell>
                    <TableCell align="right">Time Stamp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vetReducer.map((vet, i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="vet" onClick={()=> this.handleVeteran(vet.id)}>
                        {vet.first_name} {vet.last_name}
                      </TableCell>
                      <TableCell align="right" onClick={()=> this.handleResource(vet.org_id)}>{vet.name}</TableCell>
                      <TableCell align="right">{vet.received}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
        </div>
      )
  }
}

export default withRouter(withStyles(styles)(connect(mapStoreToProps)(AdminLandingPage)));
