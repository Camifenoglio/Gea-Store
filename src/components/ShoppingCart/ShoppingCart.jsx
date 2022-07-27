import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import { addToCart, delFromCart, clearCart } from "../../redux/actions/shoppingActions";
import '../../styles/shoppingContainer.css';
import { Container } from '@mui/system';
import Swal from 'sweetalert2'
import Paypal from '../../payform/Paypal';


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
                <div className='titles'>
                    <div>
                        <h2>Shopping Cart</h2>
                        <h3>Products</h3>

                    </div>
                    {cart.map((item) => {
                        const product = productsById[item.productId];
                        return (
                            <div className='cart-cointainer'>
                                <div justifyContent="center" >
                                    <div className="image-container">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                </div>
                                <div className='product-description'>
                                    <h3>{product.name}</h3>
                                    <Box display={{ xs: 'none', md: 'block' }}>{product.description}</Box>
                                </div>
                                <div justifyContent="center" direction={{ xs: "column", sm: "row" }} spacing={2}>
                                    <div justifyContent="center" spacing={2}>
                                        <div spacing={2} direction="row">
                                            <button onClick={() => dispatch(addToCart(product._id))}>+</button>
                                            <div>
                                                {item.quantity}
                                            </div>
                                            <button onClick={() => dispatch(delFromCart(product._id))}>-</button>
                                        </div>
                                        <button onClick={() => dispatch(delFromCart(product._id, true))}>Remove Product
                                        </button>
                                    </div>
                                    <div justifyContent="center">{new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(product.price)}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='total'>
                    <div>
                        <h4>Total</h4>
                    </div>
                    <div>{new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(total)}</div>
                    <button onClick={() => {
                        handleDelete()
                    }
                    }>Clear Cart</button>
                    <Paypal />
                </div>
            </div>

        </div>
    )
}

export default ShoppingCart;