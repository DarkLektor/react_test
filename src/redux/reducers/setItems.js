function setItems(items = null, action) {
    switch (action.type) {
        case 'SET_ITEMS':
          return action.payload
        default:
          return items
      }
}
export default setItems;