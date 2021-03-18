import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const DestinationsList = props => {

  return (
    <div className='DestinationContainer'>
      <Link to='/destinations/new' className='NewDestinationButton' role='button'>Add A New Destination</Link>

    <h3>Your Destinations</h3>
      {props.destinations.map(destination =>
        <Link key={destination.id} to={`/destinations/${destination.id}`}>
          <Card className = 'DestinationCard'>
            <CardBody>
              <CardTitle>{destination.name} - {destination.country}</CardTitle>
              <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
            </CardBody>
          </Card>
        </Link>
      )}
    </div>
  );
};

export default DestinationsList;