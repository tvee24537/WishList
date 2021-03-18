import React from 'react';
import GiftInput from '../components/GiftInput';
import GiftsList from '../components/GiftsList';

class Gifts extends React.Component {

    render() {
      return (
        <div>
          <GiftInput destination={this.props.destination} />
          <GiftsList gifts={this.props.destination && this.props.destination.gifts} />
        </div>
      );
    }
  };

export default Gifts;