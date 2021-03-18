// adding gifts with fetch
export const addGift = (gift, destinationId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}/gifts`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(gift)
      })
      .then(res => res.json())
      .then(destination => {
        dispatch({type: 'ADD_GIFT', payload: destination})
      })
    };
};

  // deleting gifts with fetch
export const deleteGift = (giftId, destinationId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}/gifts/${giftId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(destination =>
        dispatch({type: 'DELETE_GIFT', payload: destination})
      )
    };
};