import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { addToCart, delFromCart, clearCart } from "../../redux/actions/shoppingActions";
import '../../styles/shoppingContainer.css';
import Swal from 'sweetalert2'
import Paypal from '../../payform/Paypal';
import { Button } from '@mui/material';


const ShoppingCart = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducers);
    const { cart } = useSelector((state) => state.shoppingReducers);

    if (products.length === 0) { // early return //
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        );
    };

    function handleDelete() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                dispatch(clearCart());
            }
        })
    }


    const productsById = {};
    products.forEach(product => {
        productsById[product._id] = product;
    });
    let total = 0;
    cart.forEach(item => {
        const { productId, quantity } = item;
        const product = productsById[productId];
        total = total + product.price * quantity;
    });

    return (
        <div className='main'>
            <div className='main-content'>
                <div className='cart-cointainer'>
                    <div className='titles'>
                        <h2>Shopping Cart</h2>
                        <h3>Products</h3>

                        {cart.map((item) => {
                            const product = productsById[item.productId];
                            return (
                                <div className='yellow'>
                                    <div className="image-container">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className='product-description'>
                                        <h3>{product.name}</h3>
                                    </div>
                                    <div className='content-right'>
                                        <div className='quantity-more'>
                                            <div className='plus'>
                                                <Button
                                                    className='btnShopping_A'
                                                    onClick={() => dispatch(addToCart(product._id))}>+</Button>
                                                <h4>
                                                    {item.quantity}
                                                </h4>
                                                <Button
                                                    className='btnShopping_A'
                                                    onClick={() => dispatch(delFromCart(product._id))}>-</Button>
                                            </div>
                                            <Button
                                                className='btnShopping_A'
                                                onClick={() => dispatch(delFromCart(product._id, true))}>Remove Product
                                            </Button>
                                            <div className='price'>
                                                <h3 className='total-price'>Price:</h3>
                                                <h3> {new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(product.price)}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='total'>
                    <div>
                        <h2>Total</h2>
                        <h3>{new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(total)}</h3>
                    </div>
                    <Button
                        className='btnShopping_A'
                        onClick={() => {
                            handleDelete()
                        }
                        }>Clear Cart
                    </Button>
                    <Paypal />
                </div>
            </div>

        </div>
    )
}

export default ShoppingCart;