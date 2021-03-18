import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addGift } from '../actions/giftActions';

class GiftInput extends React.Component {

  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addGift(this.state, this.props.destination.id);
    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <div className='GiftForm'>
        <Form onSubmit={this.handleSubmit}>
          
            <h5>Add a New Gift</h5>
          
          <FormGroup row>
            <Label for='title' sm={2}>Gift Ideas:</Label>
            <Col md={10}>
              <Input type='text' name='title' value={this.state.title} placeholder='Corelle Dinnerware Set . . .' onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <Button>Add Gift</Button>
        </Form>
      </div>
    );
  }
};

export default connect(null, { addGift })(GiftInput);