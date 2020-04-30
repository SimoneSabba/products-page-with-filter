import React from 'react';

// Components
import Product from '../Product/Product';

// Style
import Grid from '@material-ui/core/Grid';

const ProductList = (props) => {
    const results = props.products.map(
        (item) => {
          return (
            <Grid key={item.uniqueID} item xs={6} sm={4} md={3}>
                <Product product={item}/>
            </Grid>
          );
        });

    return (
        <section>
            <Grid container spacing={3}>
                { results }
            </Grid>
        </section>
    )
}

export default ProductList;