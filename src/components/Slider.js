import React from 'react';
import {useSelector} from 'react-redux';
import ProdImg from './ProdImg'


function Slider() {
    const state = useSelector(state => state.currentElement);
    const images = state ? state.img : [];
    let [sliderMove, setSliderMove] = React.useState(0);
    let [maxMove, setMaxMove] = React.useState(0);
    let [activeItem, setActiveItem] = React.useState(0);


    React.useEffect(() => {
        setMaxMove(document.body.querySelector('.slider').clientHeight - document.body.querySelector('.slider_wrapper').clientHeight);
        setSliderMove(0);
    }, [images]);

    const sliderUp = () => {
        sliderMove > 0 && sliderMove >= 30 && setSliderMove(prev => prev -= 30)
    }
    
    const sliderDown = () => {
        sliderMove < maxMove && (maxMove - sliderMove + 40) >= 30 && setSliderMove(prev => prev += 30)
    }  


    return(
        <div className="slider_container">
            <div className="slider_wrapper">
                <button onClick={sliderUp} className="slide_up">
                    <svg x="0px" y="0px" viewBox="0 0 492.002 492.002">
                        <g><g>
                            <path d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844
                                L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124
                                c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064
                                c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132
                                C494.624,356.041,494.624,338.965,484.136,328.473z"/>
                        </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                </button>
                <ul className="slider" style={{bottom: (sliderMove) ? sliderMove : 0}}>
                        {images[0] && <ProdImg src={images[0]}
                                        classN="select_item active"
                                        key="active-key"
                                        index="0" 
                                        setActiveItem={setActiveItem} />}
                        {images.map((curr, index) => {
                            return (images.length > index + 1) &&
                            <ProdImg src={images[index + 1]}
                                    classN="select_item"
                                    key={index}
                                    index={index + 1}
                                    setActiveItem={setActiveItem} 
                            />
                        })}
                </ul>
                <button onClick={sliderDown} className="slide_down">
                <svg x="0px" y="0px" viewBox="0 0 491.996 491.996">
                    <g><g>
                        <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
                            L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
                            c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
                            c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
                            C491.996,136.902,489.204,130.046,484.132,124.986z"/>
                    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
                </button>
            </div>
            <div>
                <img className="current_img" src={images[activeItem]} alt="Current" />
            </div>
        </div>
    )
}

export default Slider;
