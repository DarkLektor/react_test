function setCartSum(cartSum = 0, action) {
    switch (action.type) {
        case 'SET_CART_SUM': 
          return action.payload
        case 'CART_SUM_INCR':
          return cartSum + action.payload
        case 'CART_SUM_DECR':
          return cartSum - action.payload
        default:
          return cartSum
      }
}
export default setCartSum;