function setCurrentIndex(currentIndex = 0, action) {
    switch (action.type) {
        case 'INDEX_INC':
            return currentIndex + 1
        case 'INDEX_DEC':
            return currentIndex - 1
        case 'INDEX_DEFAULT':
            return 0
        default:
            return currentIndex
    }
}

export default setCurrentIndex;