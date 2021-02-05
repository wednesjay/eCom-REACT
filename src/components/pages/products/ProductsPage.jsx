import React from 'react'
import { Products, SearchBar } from '../../common/index'


import './ProductsPage.css'



function ProductsPage () {
    
    return (
        <section className = 'product-section' id = 'product-section'>
            <SearchBar />
            <Products />
        </section>
    )
}

export default ProductsPage;