import React from 'react'
import { Grid } from '@material-ui/core';

import Product from './Product'

import { productsData } from './ProductsData.json';

const Products = () => {
    return (
        <div>
            <Grid container justify='center' spacing={0}>
                {productsData.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Products;