function setCartMass(cartMass = [], action) {
    switch (action.type) {
        case 'SET_CART_MASS':
          return action.payload
        default:
          return cartMass
      }
}
export default setCartMass;