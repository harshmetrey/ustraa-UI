import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { Star } from '@material-ui/icons'


export const ProductLists = (props) => {

    const [productCount, SetproductCount] = useState(6);
    const [width, setWidth] = useState(window.innerWidth); // eslint-disable-next-line
    const [count, setCount] = useState();
    const [imageSize, setImageSize] = useState("x60");


    const updateWindowDimensions = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
        const imageSize = newWidth <= 375 ? 'x60' : 'x120'
        setImageSize(imageSize)
    };

    useEffect(() => {
        updateWindowDimensions();
        setCount(props.count);
    }, [props.count]);


    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);
        if (props.ListRenderText === "[+] show more") {
            SetproductCount(3)
        } else {
            SetproductCount(count)
        }

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, [props.ListRenderText, count]);




    return (
        <Grid container direction="column"
            justify="center"
            alignItems="center"
        >
            {props.data && props.data.slice(0, productCount).map(item => {
                const ButtonText = item.is_in_stock ? "ADD TO CART" : "OUT OF STOCK"
                return (
                    <Grid container style={{ padding: "20px", borderBottom: "solid 1px #f0f0f0" }} key={item.id}>
                        <Grid item>
                            <img alt={item.name} src={item.image_urls[imageSize]} />
                        </Grid>
                        <Grid item xs sm container>
                            <Grid item xs={10} container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="caption">
                                        {item.name}
                                    </Typography>
                                    <Typography gutterBottom variant="body2">
                                        {item.weight !== 0 && '(' + item.weight + item.weight_unit + ')'}
                                    </Typography>
                                    <Typography gutterBottom variant="body2">
                                        ₹{item.final_price}{" "}
                                        <del>₹{item.price}</del>
                                    </Typography>
                                    <Button variant="contained" color="primary" disabled={!item.is_in_stock}>{ButtonText}</Button>
                                </Grid>
                            </Grid>
                            <Grid item xs container direction="column">
                                <Grid item xs>
                                    {item.rating &&
                                        <span className="rating-text">
                                            {item.rating} <Star></Star>
                                        </span>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProductLists
