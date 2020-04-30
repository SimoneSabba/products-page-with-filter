import React from 'react';

// Components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// Style
import './Product.scss';

const Product = (props) => {
    const item = props.product;
    // I'm using a placeholder image because API is returning a relative image path
    // and I couldn't found out the fullpath
    const img = 'https://www.fillmurray.com/640/360';

    // `wcs/` and `search/` API are returning price object with an inconsistence naming convention. Same for `priceValue` and `value` fields
    const price = item.Price || item.price;
    return (
        <Card className="Product">
            <CardActionArea>
                <CardMedia
                    className="Product__image"
                    image={img}
                    title={item.name}
                />
                <CardContent>
                    <h2>{item.name}</h2>
                    <p>${price[0].priceValue || price[0].value}</p>
                </CardContent>
            </CardActionArea>
        </Card>
    )
    
};

export default Product;