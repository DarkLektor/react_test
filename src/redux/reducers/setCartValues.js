function setCartValues(cartValues = [], action) {
    switch (action.type) {
        case 'SET_CART_VALUES':
          return action.payload
        case 'SET_CART_VALUES_NEW_ITEM':
          return [...cartValues, 1]
        default:
          return cartValues
      }
}
export default setCartValues;