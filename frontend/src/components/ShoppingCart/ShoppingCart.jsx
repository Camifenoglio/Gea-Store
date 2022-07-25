import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import { addToCart, delFromCart, clearCart } from "../../redux/actions/shoppingActions";
import CartItem from "./CartItem";
import ProductItem from './ProductItem'
import '../../styles/shoppingContainer.css';
import { Container } from '@mui/system';

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
        <Container maxWidth="md">
            <h2>Shopping Cart</h2>
            <h3>Products</h3>
            <Stack direction="column" spacing={1} divider={<Divider orientation="horizontal" flexItem />}>
                {cart.map((item) => {
                    const product = productsById[item.productId];
                    return (
                        <Stack p={{ xs: 2, sm: 4 }} key={item.productId} direction="row" spacing={4} >
                            <Stack justifyContent="center">
                                <div className="image-container">
                                    <img src={product.image} alt={product.name} />
                                </div>
                            </Stack>
                            <Stack justifyContent="center">
                                <h3>{product.name}</h3>
                                <Box display={{ xs: 'none', md: 'block' }}>{product.description}</Box>
                            </Stack>
                            <Stack justifyContent="center" direction={{ xs: "column", sm: "row" }} spacing={2}>
                                <Stack justifyContent="center" spacing={2}>
                                    <Stack spacing={2} direction="row">
                                        <button onClick={() => dispatch(addToCart(product._id))}>+</button>
                                        <div>
                                            {item.quantity}
                                        </div>
                                        <button onClick={() => dispatch(delFromCart(product._id))}>-</button>
                                    </Stack>
                                    <button onClick={() => dispatch(delFromCart(product._id, true))}>Remove</button>
                                </Stack>
                                <Stack justifyContent="center">{new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(product.price)}</Stack>
                            </Stack>
                        </Stack>
                    )
                })}
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
                <h4>Total</h4>
                <div>{new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(total)}</div>
            </Stack>
            {/* <div className="shoppingContainer grid-resposive">
                {cart.map((item) => {
                    const product = productsById[item.productId];
                    return (
                        <ProductItem
                            key={product._id}
                            product={product}
                            addtoCart={() => dispatch(addToCart(product._id))} />
                    )
                })}
            </div>
            <h3>Cart</h3>
            <div className="shoppingContainer">
                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                {cart.map((item, index) => (
                    <CartItem
                        key={index}
                        product={productsById[item.productId]}
                        quantity={item.quantity}
                        delOneFromCart={() => dispatch(delFromCart(item.productId))}
                        delAllFromCart={() => dispatch(delFromCart(item.productId, true))}
                    >
                    </CartItem>
                ))}
            </div>
            <h3>Total: ${total}</h3> */}
        </Container>
    )
}

export default ShoppingCart;