import React from 'react';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';

class DestinationCard extends React.Component {

    callApi = () => {
        console.log('a')
        fetch(`http://localhost:3000/destinations/1`)
          .then(res => {
            console.log(res)
            if (!res.ok) {
              throw new Error(res.statusText)
            } else {
            console.log('b')
            return res.json()
            }
        })
        .then(destination => console.log('c', destination))
        .catch(error => console.log('d', error))
        console.log('e')

    }

    render () {
        let {destination} = this.props
        return (
            <Card className = 'DestinationCard'>
            <CardBody>
                <CardTitle>{destination.name} - {destination.country}</CardTitle>
                <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
                <Button onClick={this.callApi}>Call API</Button>
            </CardBody>
            </Card>
        )
    }

}

export default DestinationCard;