function setCategory(category = 'Woman', action) {
    switch (action.type) {
        case 'SET_CATEGORY_WOMAN':
          return 'Woman'
        case 'SET_CATEGORY_MAN':
          return 'Man'
        default:
          return category
      }
}
export default setCategory;