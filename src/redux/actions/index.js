export function changeLocaleRu() {
    return { 
        type: "CHANGE_LOC_RU"
    };
}
export function changeLocaleEn() {
    return { 
        type: "CHANGE_LOC_EN"
    };
}
export function setItems(payload) {
    return { 
        type: "SET_ITEMS",
        payload: payload
    };
}
export function setCurrentIndexInc() {
    return { 
        type: "INDEX_INC",
    };
}
export function setCurrentIndexDec() {
    return { 
        type: "INDEX_DEC",
    };
}
export function setCurrentIndexDefault() {
    return { 
        type: "INDEX_DEFAULT",
    };
}
export function setCategoryMan() {
    return { 
        type: "SET_CATEGORY_MAN",
    };
}
export function setCategoryWoman() {
    return { 
        type: "SET_CATEGORY_WOMAN",
    };
}
export function setCartMass(payload) {
    return { 
        type: "SET_CART_MASS",
        payload: payload
    };
}
export function setWishMass(payload) {
    return { 
        type: "SET_WISH_MASS",
        payload: payload
    };
}
export function setCurrentElem(payload) {
    return { 
        type: "SET_CURRENT_ELEMENT",
        payload: payload
    };
}
export function setCartSum(payload) {
    return { 
        type: "SET_CART_SUM",
        payload: payload
    };
}
export function cartSumIncr(payload) {
    return { 
        type: "CART_SUM_INCR",
        payload: payload
    };
}
export function cartSumDecr(payload) {
    return { 
        type: "CART_SUM_DECR",
        payload: payload
    };
}
export function setCartValues(payload) {
    return { 
        type: "SET_CART_VALUES",
        payload: payload
    };
}
export function setCartValuesNewItem() {
    return { 
        type: "SET_CART_VALUES_NEW_ITEM"
    };
}


