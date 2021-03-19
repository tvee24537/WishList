import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const GrantedDestinations = props => {

  return (
    <div className='DestinationContainer'>
      <h3>Wish You Have Granted</h3>

      {props.destinations.map(destination => {
        if (destination.granted === true) {
          return (
            <Link key={destination.id} to={`/destinations/${destination.id}`}>
              <Card className = 'DestinationCard'>
                <CardBody>
                  <CardTitle>{destination.name} - {destination.country}</CardTitle>
                  <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
                </CardBody>
              </Card>
            </Link>
          )
        } else {
          return (
            null
          )
        }
      })}
    </div>
  );
};

export default GrantedDestinations;