import { combineReducers } from 'redux'
import setChangeLocale from './setChangeLocale'
import setItems from './setItems'
import setCurrentIndex from './setCurrentIndex'
import setCategory from './setCategory'
import setCartMass from './setCartMass'
import setWishMass from './setWishMass'
import setCartValues from './setCartValues'
import setCurrentElem from './setCurrentElem'
import setCartSum from './setCartSum'

const rootReducer = combineReducers({
    items: setItems,
    currentIndex: setCurrentIndex,
    currentElement: setCurrentElem,
    locale: setChangeLocale,
    category: setCategory,
    cart: setCartMass,
    wish: setWishMass,
    cartValues: setCartValues,
    cartSum: setCartSum,
})

export default rootReducer;