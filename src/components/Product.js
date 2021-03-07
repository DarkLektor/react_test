import React from 'react'
import ProductDesc from './ProductDesc';
import Slider from "./Slider";

function Product() {
    return (
        <div className="product_item">
            <Slider /> 
            <ProductDesc />          
        </div>
    )
}

export default Product
