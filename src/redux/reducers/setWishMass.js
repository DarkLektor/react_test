function setWishMass(wishMass = [], action) {
    switch (action.type) {
        case 'SET_WISH_MASS':
          return action.payload
        default:
          return wishMass
      }
}
export default setWishMass;