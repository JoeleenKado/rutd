import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class VetMatches extends Component {
  state = {
    heading: 'Vet Matches',
  };

  contactOrg = (event) => {
   console.log('Contacting Org');
   
}

componentDidMount() {
  this.props.dispatch({ type: 'FETCH_CATEGORY' });
  this.props.dispatch({ type: 'FETCH_MATCH' });

}

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
                  REDUX STATE: {JSON.stringify(this.props.store)}

        <button onClick={(event)=>this.props.history.push('/home')}>BACK TO HOME</button>
        <button onClick={(event) => this.contactOrg(event)}>CONTACT ORG</button>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(VetMatches);