import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

//COMPONENTS AND ACTIONS
import productsActions from '../../redux/actions/productsActions';
import Error from '../Error'
import { addToCart, countCart } from "../../redux/actions/shoppingActions";
import Loader from '../Loader';


//MUI
import IconButton from '@mui/material/IconButton';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

//STYLES
import '../../styles/products.css'
import { set } from 'lodash';





const arrayCategories = ["All Categories", "Gluten free", "Sugar free", "Lactose free", "Vegan", "Canned food", "Sweets and jams", "Flours and more", "Cookies, bakery and more", "Nuts, seeds and more", "Snacks", "Rice and pasta", "Oils, dressings and more", "Sugar, sweeteners and more", "Broths, soups and sauces", "Cereals, granola and more", "Chocolate and more"]


export default function Products() {

    const dispatch = useDispatch()


    function alerts(success) {
        return (
            toast.success('Added to Cart', { position: "bottom-center" })
        )
    }

    const ScrollToTop = () =>  {
        window.scroll({
            top: 0,
            behavior: "smooth",
            left:0
        })
    }

    // VAR DE ESTADO
    const [category, setCategory] = useState('')
    const [reload, setReload] = useState(false)
    const [input, setInput] = useState('')
    console.log(input)
    const [count, setCount] = React.useState(1);


    const user = useSelector(store => store.usersReducers.user)
    const currentStore = useSelector(store => store.productReducers.filterPerCategory)
    const filterStore = currentStore.filter(product => product.name.toLowerCase().includes(input.trim().toLowerCase()))
    console.log(filterStore)

    useEffect(() => {
        dispatch(productsActions.getProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // COMO SOBRA
<<<<<<< HEAD

=======
    // useEffect(() => {
    //     removeProduct()
    //     dispatch(productsActions.getProducts(currentStore))
    //     //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [!reload])
>>>>>>> 7eff1e3eb02d73e6048a635a3c12965a2b4573fe

    useEffect(() => {
        dispatch(productsActions.filterPerCategory(category))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [!reload])


    const selectCategoryBtn = async (event) => {
        setCategory(event.target.value)
        const selectCategory = category
        console.log(selectCategory)

        if (event.target.value === 'All Categories') {
            dispatch(productsActions.getProducts())
            setReload(!reload)
        } else {
            const res = await dispatch(productsActions.filterPerCategory(selectCategory))
            setReload(!reload)
        }

    }

    async function removeProduct(event) {
        //console.log(event)
        await dispatch(productsActions.deleteProduct(event.target.id))
        setReload(!reload)
        dispatch(productsActions.getProducts())
    }


    return (
        <div className='productsPageContainer_F'>
            <div className="group searchMargin_F">
                <SearchRoundedIcon className="icon" />
                <input placeholder="Search" type="search" className="input" onKeyUp={(event) => { setInput(event.target.value) }} />
            </div>

            <div className='productAndFilters_F'>
                <div className='categoriesSidebar_F'>
                    <img src='https://i.imgur.com/hD3qytz.png' alt='logoGea' className='logoSidebar_F' />
                    <InputLabel id='category-label'>Category</InputLabel>
                    <Select
                        //className='btnSidebarCategory_F buttonCategory_F' 
                        onChange={selectCategoryBtn}
                        onClick={ScrollToTop}
                        value={category}
                        sx={{ borderColor: '#F2A0A0', color: '#1b2808', fontWeight: 'bold' }}
                        displayEmpty
                        className='selectCategory_F'

                    >
                        {arrayCategories.sort().map((category, index) => (
                            <MenuItem
                                key={index}
                                value={category}
                                sx={{ backgroundColor: '#ECF2E4', fontWeight: 500 }}
                            //onChange={selectCategoryBtn}
                            >{category}</MenuItem>
                        ))}
                    </Select>
                </div>

                <div className='products_F'>
                    <>
                    {filterStore.length > 0 ? filterStore?.map((product, index) => (
                        <div className='card' id={product._id} key={index}>
                            <LinkRouter
                                to={`/products/${product._id}`}
                                className="underline-none"
<<<<<<< HEAD
                                key={index}
                                onClick={ScrollToTop}
=======

>>>>>>> 7eff1e3eb02d73e6048a635a3c12965a2b4573fe
                            >
                                {product.image.includes("https") ?
                                    <img className="card-img" src={product.image} alt='product' />
                                    :
                                    <img className="card-img" src={process.env + `storage/product/${product.image}`} alt='product' />
                                }
                                <div className="card-info">
                                    <p className="text-title">{product.name}</p>
                                </div>

                            </LinkRouter>
                            <div className="card-footer">
                                <span className="text-title">${product.price}.00</span>
                                {user?.role === 'admin' ?
                                    <>
                                        <button
                                            id={product._id}
<<<<<<< HEAD
                                            onClick={removeProduct}
=======
                                            onClick={(e) => { removeProduct(e); reloadSet() }}
>>>>>>> 7eff1e3eb02d73e6048a635a3c12965a2b4573fe
                                        >
                                            ಥ_ಥ
                                        </button>
                                        <IconButton
                                            className="card-button"
                                            onClick={(success) => {
                                                alerts()
                                                setCount(count + 1)
                                                dispatch(addToCart(product._id))
                                                dispatch(countCart(count))
                                            }
                                            }>
                                            <LocalGroceryStoreOutlinedIcon fontSize='small' className="svg-icon" viewBox="0 0 20 20" />
                                        </IconButton>
                                    </>
                                    :
                                    <>
                                        <IconButton
                                            className="card-button"
                                            onClick={
                                                (success) => {

                                                    if (user) {

                                                        setCount(count + 1)
                                                        dispatch(addToCart(product._id))
                                                        dispatch(countCart(count))
                                                        toast.success('Added to Cart', { position: "bottom-center" })
                                                    } else {
                                                        toast.error('You need to be logged to add to the cart', { position: "bottom-center" })
                                                    }
                                                }}>
                                            <LocalGroceryStoreOutlinedIcon fontSize='small' className="svg-icon" viewBox="0 0 20 20" />
                                        </IconButton>
                                    </>
                                }
                            </div>
                        </div>
                    )) : <Loader/>}
                    </>
                </div>
            </div>
        </div>
    );
}