import React from 'react';
import { Link as LinkRouter } from 'react-router-dom'

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//STYLES
import '../../styles/cardProducts.css'

export default function CardProducts() {
    return (
        <div className='productsPageContainer_F'>

            <div className="group searchMargin_F">
                <SearchRoundedIcon className="icon" />
                <input placeholder="Search" type="search" className="input" />
            </div>

            <div className='products_F'>
                <Card className='BL-card-products'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image="https://static6.depositphotos.com/1001599/647/i/450/depositphotos_6477165-stock-photo-fire-swirl-letter-y.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography className='BL-NyP-products'>
                                Price:
                            </Typography>
                            <Typography className='BL-NyP-products'>
                                Name:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <div className='card_F'>
                    <div className='cardImg_F'>
                        <img src="https://pngimg.com/uploads/apple/apple_PNG12444.png" alt="product" />
                    </div>
                    <div className='cardTitle_F'>
                        <h3>Manzana</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='cardDetails_F'>
                        <div className='price_F'>
                            <span>Price</span>
                            <p>$5000</p>
                        </div>
                        <div className='volume'>
                            <span>Item Volume</span>
                            <p>5kg</p>
                        </div>
                    </div>
                    <button>Buy Now</button>
                </div>

                <div className="card">
                    <div className="card-img"></div>
                    <div className="card-info">
                        <p className="text-title">Product title </p>
                        <p className="text-body">Product description and details</p>
                    </div>
                    <div className="card-footer">
                        <span className="text-title">$499.49</span>
                        <div className="card-button">
                            <ShoppingCartOutlinedIcon className="svg-icon" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}