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


//MUI
import IconButton from '@mui/material/IconButton';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

//STYLES
import '../../styles/products.css'
import { set } from 'lodash';


const arrayCategories = ["Gluten free", "Sugar free", "Lactose free", "Vegan", "Canned food", "Sweets and jams", "Flours and more", "Cookies, bakery and more", "Nuts, seeds and more", "Snacks", "Rice and pasta", "Oils, dressings and more", "Sugar, sweeteners and more", "Broths, soups and sauces", "Cereals, granola and more", "Chocolate and more"]


export default function Products() {

    const dispatch = useDispatch()

    function alerts(success) {
        return (

            toast.success('Added to Cart', { position: "bottom-center" })


        )

    }


    // VAR DE ESTADO
    const [category, setCategory] = useState('')
    const [reload, setReload] = useState(false)
    const [input, setInput] = useState('')
    const [count, setCount] = React.useState(1);

    // console.log(count)


    useEffect(() => {
        dispatch(productsActions.getProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch(productsActions.filterPerCategory(category))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [!reload])

    const selectCategoryBtn = async (event) => {
        setCategory(event.target.value)
        const selectCategory = category
        const res = await dispatch(productsActions.filterPerCategory(selectCategory))

        setReload(!reload)
    }

    const currentStore = useSelector(store => store.productReducers.filterPerCategory)
    const filterStore = currentStore.filter(product => product.name.toLowerCase().includes(input.trim().toLowerCase()))

    return (
        <div className='productsPageContainer_F'>
            <div className="group searchMargin_F">
                <SearchRoundedIcon className="icon" />
                <input placeholder="Search" type="search" className="input" onKeyUp={(event) => { setInput(event.target.value) }} />
            </div>

            <div className='productAndFilters_F'>
                <div className='categoriesSidebar_F'>
                    <img src='https://i.imgur.com/hD3qytz.png' alt='logoGea' className='logoSidebar_F' />

                    {arrayCategories.sort().map((category, index) => (
                        <button
                            key={index}
                            className='btnSidebarCategory_F buttonCategory_F'
                            value={category}
                            onClick={selectCategoryBtn}
                        >{category}
                        </button>
                    ))}
                </div>






                <div className='products_F'>
                    {filterStore.length > 0 ? filterStore?.map((product, index) => (
                        <div className='card'>

                            <LinkRouter

                                to={`/products/${product._id}`}
                                className="underline-none"
                                key={index}
                            >
                                <img className="card-img" src={product.image} alt='product' />
                                <div className="card-info">
                                    <p className="text-title">{product.name}</p>
                                </div>

                            </LinkRouter>
                            <div className="card-footer">
                                <span className="text-title">${product.price}.00</span>
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
                            </div>
                            <div>

                            </div>
                        </div>
                    )) : <Error />}
                </div>
            </div>
        </div>
    );
}