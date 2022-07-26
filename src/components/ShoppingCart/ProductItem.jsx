const ProductItem = ({ product, addtoCart }) => {
    const { id, name, price } = product

    return <div style={{ border: 'thin solid gray', padding: '1rem' }}>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button onClick={() => addtoCart(id)}>Agregar</button>
    </div>
}

export default ProductItem;