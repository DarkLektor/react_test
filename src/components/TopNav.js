import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { changeLocaleRu, changeLocaleEn, setCurrentIndexInc, setCurrentIndexDec, setCurrentIndexDefault, setCurrentElem } from '../redux/actions';


function TopNav() {
    const dispatch = useDispatch();
    const locale = useSelector(state => state.locale.lang);
    const name = useSelector(state => state.currentElement ? state.currentElement.name : '');
    const currentIndex = useSelector(state => state.currentIndex);
    const category = useSelector(state => state.category);
    const itemsObj = useSelector(state => state.items);
    const itemsLength = useSelector(state => state.items[category.toLowerCase()].length);

    
    React.useEffect(() => {
        dispatch(setCurrentIndexDefault());
        dispatch(setCurrentElem(itemsObj[category.toLowerCase()][0]));
    }, [category]);

    React.useEffect(() => {
        itemsObj && dispatch(setCurrentElem(itemsObj[category.toLowerCase()][currentIndex]))
    }, [currentIndex]);

    React.useEffect(() => {
        itemsObj && dispatch(setCurrentElem(itemsObj[category.toLowerCase()][currentIndex]))
    }, [itemsObj]);

    function setCurrentIndex(e) {
        e.preventDefault();
        if (e.target.className === 'incr' && itemsLength - 1 > currentIndex) {
            dispatch(setCurrentIndexInc())
        } else if (e.target.className === 'decr' && 0 < currentIndex) {
            dispatch(setCurrentIndexDec())
        }
    }

    function changeLocale() {
        locale === 'en' ? dispatch(changeLocaleRu()) : dispatch(changeLocaleEn());
    }
    
    
    return (
        <div className="top_nav">
            <p className="topnav_path">
                <span>
                    {locale === 'en' ? category :
                        category === 'Woman' ? 'Женщины' : 'Мужчины'}
                </span>
                <svg x="0px" y="0px" viewBox="0 0 18.909 18.909">
                    <g>
                        <path d="M10.193,8.311L1.887,1.714C1.484,1.511,1.003,1.533,0.619,1.766C0.233,1.998,0,2.412,0,2.856v13.198
                            c0,0.443,0.233,0.856,0.619,1.089c0.208,0.126,0.444,0.19,0.683,0.19c0.201,0,0.401-0.046,0.586-0.138l8.306-6.599
                            c0.4-0.376,0.716-0.658,0.716-1.143S10.641,8.707,10.193,8.311z"/>
                        <path d="M18.193,8.311L9.887,1.714C9.484,1.511,9.002,1.533,8.618,1.766
                            c-0.386,0.232-0.619,0.646-0.619,1.09v13.198c0,0.443,0.233,0.856,0.619,1.089c0.208,0.126,0.444,0.19,0.683,0.19
                            c0.201,0,0.401-0.046,0.586-0.138l8.306-6.599c0.4-0.376,0.716-0.658,0.716-1.143S18.641,8.707,18.193,8.311z"/>
                    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
                <span>
                    {name}
                </span>
            </p>
            <button className="locale" onClick={changeLocale}>
                <img src={locale === 'ru' ? "./img/loc/en.svg" : "./img/loc/ru.svg"} alt="lang" />
            </button>
            <div className="pages_slide">
                <a className="decr" href="#" onClick={setCurrentIndex}>
                    <svg x="0px" y="0px" viewBox="0 0 492 492">
                        <g>	<g>
                            <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
                            C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
                            c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
                            l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>
                        </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                   {locale === 'en' ? 'Prev.' : 'Назад'} 
                </a>
                <span>{locale === 'en' ?
                        `${currentIndex + 1} of ${itemsLength}` :
                        `${currentIndex + 1} из ${itemsLength}`}
                </span>
                <a className="incr" href="#" onClick={setCurrentIndex}>
                    {locale === 'en' ? 'Next' : 'Вперед'} 
                    <svg x="0px" y="0px" viewBox="0 0 492.004 492.004">
                        <g>	<g>
                            <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                        </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                    
                </a>
            </div>

        </div>
    )
}

export default TopNav;
