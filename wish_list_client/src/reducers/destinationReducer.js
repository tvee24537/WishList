const destinationReducer = (state = { destinations: [] }, action) => {

    switch (action.type) {
  
      case 'FETCH_DESTINATIONS':
        return {...state, destinations: action.payload};
  
      case 'ADD_DESTINATION':
        return {...state, destinations: [...state.destinations, action.payload]};
  
      case 'DELETE_DESTINATION':
        const filteredDestinations = state.destinations.filter(destination => destination.id !== action.payload)
        return {...state, destinations: filteredDestinations}
  
      case 'TOGGLE_GRANTED':
      case 'TOGGLE_WAIT_LIST':
        const destination = state.destinations.map(destination => {
          if (destination.id !== action.payload.id) {
            return destination
          } else {
            return action.payload
          }
        })
        return {...state, destinations: destination}
  
      case 'ADD_GIFT':
        const addGiftDestination = state.destinations.map(destination => {
          if (destination.id === action.payload.id) {
            return action.payload
          } else {
            return destination
          }
        })
        return {...state, destinations: addGiftDestination}
  
      case 'DELETE_GIFT':
        const deleteGiftDestination = state.destinations.map(destination => {
          if (destination.id === action.payload.id) {
            return action.payload
          } else {
            return destination
          }
        })
        return {...state, destinations: deleteGiftDestination}
  
      default:
        return state;
    }
  }
  
  export default destinationReducer;