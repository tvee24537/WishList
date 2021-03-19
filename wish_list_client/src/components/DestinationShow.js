import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import Gifts from '../containers/Gifts';
import { deleteDestination, toggleGranted, toggleWaitList } from '../actions/destinationActions';


const DestinationShow = props => {

  let destination = props.destinations.filter(destination => destination.id == props.match.params.id)[0];

  const handleDelete = () => {
    props.deleteDestination(destination.id);
    const path = `/destinations`;
    props.history.push(path);
  };

  const handleGranted = () => {
    props.toggleGranted(destination, destination.id)
  }

  const handleWaitList = () => {
    props.toggleWaitList(destination, destination.id)
  }

  return (
    <div>
      <Card className = 'DestinationShow'>
      <CardBody>
          <CardTitle style={{border: 'double' }}>{destination && destination.name} - {destination && destination.country}</CardTitle>
          <CardImg className='DestinationImage' src={destination && destination.image} alt={destination && destination.name} /><br></br><br></br>
        </CardBody>
        <Button onClick={handleGranted} className='GrantedButton' style={{alignItems: 'center' }}>
          {destination && destination.granted === false ? 'Add to Granted' : 'You Have Granted'}
        </Button>
        <Button onClick={handleWaitList} className='WaitListButton'>
          {destination && destination.wait_list === false ? 'Add to Wait List' : 'This Is In your Wait List'}
        </Button>
        <Button onClick={handleDelete} className='DeleteButton'>Delete This Destination</Button>
      </Card>

      <Gifts destination={destination} />
    </div>
  );
};

export default connect(null, { deleteDestination, toggleGranted, toggleWaitList })(DestinationShow);