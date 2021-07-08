import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCartMass, cartSumIncr, cartSumDecr, setCartValues} from '../redux/actions';



function CartForm({obj, noCart, cartIndex}) {
    const cartMass = useSelector(state => state.cart);
    const cartValues = useSelector(state => state.cartValues);
    const locale = useSelector(state => state.locale.lang);
    const dispatch = useDispatch();

    const [selectColor, setSelectColor] = React.useState(obj.colors[0])
    const [counter, setCounter] = React.useState(1);
    const inputCounter = React.useRef();


    React.useEffect(() => {
        document.querySelector('.color_button_0.color-' + cartIndex) &&
        document.querySelector('.color_button_0.color-' + cartIndex).click();
        if (!noCart) {
            setCounter(inputCounter.current.value);
        } else {
            setCounter(1);
        }
    }, []);
    
    React.useEffect(() => {
        if (noCart) {
            setCounter(1);
        }
    }, [obj]);

    React.useEffect(() => {
        document.querySelector('.color_button_0.color-' + cartIndex) &&
        document.querySelector('.color_button_0.color-' + cartIndex).click();
    }, [cartIndex]);

    function onSubmitCart(e, mass) {
        e.preventDefault();
        if (!cartMass.find((item) => {
                return item.id === mass.id &&
                    item.clothesCat === mass.clothesCat &&
                    item.price === mass.price
            })) {
            dispatch(setCartMass(cartMass.concat(mass)));
        }
    }
    
    function counterOnChange(e) {
        setCounter(e.target.value);
    }

    function plusMinusCounter(e) {
        if (e.target.classList.contains('plus') && counter < 9) {
            setCounter((prev) => +prev + 1);
            if (!noCart) {
                dispatch(cartSumIncr(obj.price));
                dispatch(setCartValues(cartValues.map((item, index) => index === cartIndex ? item + 1 : item)));
            }
        } else if (e.target.classList.contains('minus') && counter > 1) {
            setCounter((prev) => +prev - 1);
            if (!noCart) {
                dispatch(cartSumDecr(obj.price));
                dispatch(setCartValues(cartValues.map((item, index) => index === cartIndex ? item - 1 : item)));
            }
            
        }
    }

    function radioCheck(e, cartIndex) {
        e.preventDefault();
        document.querySelector('.color-' + cartIndex + '.select-color') &&
        document.querySelector('.color-' + cartIndex + '.select-color').classList.remove('select-color');
        e.target.classList.add('select-color');
        setSelectColor(e.target.value);
    }


    return (
        <form className="cart_form" onSubmit={(e) => onSubmitCart(e, obj)}>
                <div className="colors">
                    <p>ssssss</p>
                    <p className="colors_title">
                        {locale === 'en' ? 'COLOR: ' : 'ЦВЕТ: '}
                        <span>{selectColor}</span>
                    </p>
                    <div className="colors_buttons">
                        {obj.color_code.map((item, index) => 
                            <button key={index} 
                                value={obj.colors[index]}
                                onClick={(e) => radioCheck(e, cartIndex)}
                                className={"color_button color-" + cartIndex + " color_button_" + index}
                                style={{backgroundColor: item}}>
                            </button> )}                   
                    </div>
                </div>
                <div className="size_count">
                    <select className="select_size" name="size">
                        {obj.sizes.map((item, index) => (
                            <option key={index} value={index}>
                                {locale === 'en' ? 'Size: ' : 'Размер: '}
                                {item.toUpperCase()}
                            </option>) )}
                    </select>
                    <div className="prod_counter">
                        <span className="minus" onClick={plusMinusCounter} >-</span>
                            <input type="text" value={counter} onChange={counterOnChange} ref={inputCounter} />
                        <span className="plus" onClick={plusMinusCounter} >+</span>
                    </div>
                    {noCart && <input type="submit" value={locale === 'en' ? 'ADD TO CART' : 'ДОБАВИТЬ В КОРЗИНУ'} className="add_cart" />}
                </div>
            </form>
    )
}

export default CartForm
