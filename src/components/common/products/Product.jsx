import React from 'react'
import './ProductsData.json';
import './Product.css'

const Product = ({ product }) => {
    return (
        <div className = 'product'>
            <h3>{product.name}</h3>
            <img src={product.image} alt="cheese pizza" className = 'product-image'/>
            <p className = 'product-description'>{product.description}</p>
            <p className = 'product-price'>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
