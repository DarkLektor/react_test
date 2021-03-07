function setCurrentElem(currentElem = null, action) {
    switch (action.type) {
        case 'SET_CURRENT_ELEMENT':
          return action.payload
        default:
          return currentElem
      }
}
export default setCurrentElem;