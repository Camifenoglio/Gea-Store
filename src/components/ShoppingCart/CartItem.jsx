const CartItem = ({ product, quantity, delOneFromCart, delAllFromCart }) => {
    const { id, name, price } = product;
    return (
        <div style={{ borderBottom: 'thin solid gray' }}>
            <h4>{name}</h4>
            <h5>${price}.00 {quantity}=${price * quantity}.00</h5>
            <button onClick={() => delOneFromCart(id)}>Delete</button>
            <button onClick={() => delAllFromCart(id, true)}>Delete All</button>
        </div>
    )
};

export default CartItem;