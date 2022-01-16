// fetch all destinations 
export const fetchDestinations = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/destinations') //returns promise of res, a resolved value of the promise
      .then(res => res.json()) //then using res as argument to the callback, returns promise which will be use for the next asynchronus callback
      .then(destinations => {
          dispatch({ //res.json = destinations
            type: 'FETCH_DESTINATIONS',
            payload: destinations
          })
        })
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
    console.log (destination.wait_list)
    const updatedWaitList = {...destination, wait_list: !destination.wait_list}; // updatedWaitList is new destination, switching defualt false to true, vice vesa when toggle again
    console.log (updatedWaitList.wait_list)
    return (dispatch) => { // updating database, sending dispatch to reducer
      fetch(`http://localhost:3000/destinations/${destinationId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({destination: updatedWaitList})
      })
      .then(res => res.json()) // converting respond to json
      .then(destination => {
        dispatch({type: 'TOGGLE_WAIT_LIST', payload: destination}) // dispatch togglewaitlist reducer 
      })
    };
};