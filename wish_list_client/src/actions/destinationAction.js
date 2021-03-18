// fetch all destinations 
export const fetchDestinations = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/destinations')
      .then(res => res.json())
      .then(destinations => dispatch({
        type: 'FETCH_DESTINATIONS',
        payload: destinations
      }))
    };
};

  // add destinations
export const addDestination = (destinationData, history, path) => {
    return (dispatch) => {
      fetch('http://localhost:3000/destinations', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(destinationData)
      })
      .then(res => res.json())
      .then(destination => {
        history.push(path)
        dispatch({type: 'ADD_DESTINATION', payload: destination})
      })
    };
};

  //delete destinations 
export const deleteDestination = destinationId => {
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(destination => {
        dispatch({type: 'DELETE_DESTINATION', payload: destination.id})
      })
    };
};
  
  //toggle destination granted/not granted
export const toggleGranted = (destination, destinationId) => {
    const updatedGranted = {...destination, granted: !destination.granted};
  
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({destination: updatedGranted})
      })
      .then(res => res.json())
      .then(destination => {
        dispatch({type: 'TOGGLE_GRANTED', payload: destination})
      })
    };
};

  // add destination to waitlist with fetch
export const toggleWaitList = (destination, destinationId) => {
    const updatedWaitList = {...destination, wait_list: !destination.wait_list};
  
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({destination: updatedWaitList})
      })
      .then(res => res.json())
      .then(destination => {
        dispatch({type: 'TOGGLE_WAIT_LIST', payload: destination})
      })
    };
};