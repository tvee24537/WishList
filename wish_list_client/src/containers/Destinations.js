
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchDestinations } from '../actions/destinationActions';
import DestinationInput from '../components/DestinationInput';
import DestinationsList from '../components/DestinationsList';
import DestinationShow from '../components/DestinationShow';
import GrantedDestinations from '../components/GrantedDestinations';
import WaitList from '../components/WaitList';

class Destinations extends React.Component {

  componentDidMount() {
    this.props.fetchDestinations()
  }

    render() {
        return (
          <div>
            <Switch>
              <Route path='/destinations/new' component={DestinationInput} />
              <Route path='/destinations/granted' render={(routerProps) => <GrantedDestinations {...routerProps} destinations={this.props.destinations} />} />
              <Route path='/destinations/wait-list' render={(routerProps) => <WaitList {...routerProps} destinations={this.props.destinations} />}  />
              <Route path='/destinations/:id' render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations} />} />
              <Route path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations} />} />
            </Switch>
          </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    destinations: state.destinations
  }
};

export default connect(mapStateToProps, { fetchDestinations })(Destinations);