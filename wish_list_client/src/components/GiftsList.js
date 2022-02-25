import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { deleteGift } from '../actions/giftActions';

const GiftsList = props => {

  const handleDelete = (gift) => {
    props.deleteGift(gift.id, gift.destination_id)
  }
  return (
    <div className='GiftsList'>
      {props.gifts && props.gifts.length === 0 ? <h6>There aren't any gifts for this person yet.</h6> : <h5>Below are some gift ideas for this person.</h5>}
      <ListGroup>
        {props.gifts && props.gifts.map(gift =>
        <div>
          <ListGroupItem style={{fontSize: 'xx-large' }} key={gift.id}>
            {gift.title}   
            <Button style={{backgroundColor: 'white'}}onClick={() => handleDelete(gift)} className='DeleteButton'>Delete This Gift</Button>
          </ListGroupItem>
        </div>
         
        )}
      </ListGroup>
    </div>
  );
};

export default connect(null, { deleteGift })(GiftsList);