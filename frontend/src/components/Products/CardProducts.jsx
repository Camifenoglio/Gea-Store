import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';

//COMPONENTS AND ACTIONS
import productsActions from '../../redux/actions/productsActions';
import Error from '../Error'
//MUI
import IconButton from '@mui/material/IconButton';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

//STYLES
import '../../styles/cardProducts.css'

const arrayCategories = ["Gluten free", "Sugar free", "Lactose free", "Vegan","Canned food", "Sweets and jams", "Flours and more", "Cookies, bakery and more", "Nuts, seeds and more", "Snacks", "Rice and pasta", "Oils, dressings and more", "Sugar, sweeteners and more", "Broths, soups and sauces", "Cereals, granola and more", "Chocolate and more"]

export default function CardProducts() {

    const dispatch = useDispatch() // 

    useEffect(() => {
        dispatch(productsActions.getProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const filter = (evento) => {
        dispatch(productsActions.filterProducts(evento.target.value))
    }
    const productsFilter = useSelector(store => store.productReducers.filterPerName)

    async function filterBtnSidebar(event) {
        //console.log(event.target.value)
        await dispatch(productsActions.filterPerCategory(event.target.value))
    }


    return (

        <div className='productsPageContainer_F'>
            <div className="group searchMargin_F">
                <SearchRoundedIcon className="icon" />
                <input placeholder="Search" type="search" className="input" onKeyUp={filter} />
            </div>

            <div className='productAndFilters_F'>
                <div className='categoriesSidebar_F'>
                    <img src='https://i.imgur.com/hD3qytz.png' alt='logoGea' className='logoSidebar_F' />
                    {arrayCategories.sort().map((category, index)=> (
                        <button
                        key={index}
                        className='btnSidebarCategory_F buttonCategory_F'
                        value={category}
                        onClick={filterBtnSidebar}
                        >{category}</button>
                    ))}
                </div>
                <div className='products_F'>
                    {productsFilter.length > 0 ? productsFilter?.map((product, index) => (
                        <LinkRouter
                            to={`/products/${product._id}`}
                            className="card underline-none"
                            key={index}
                        >
                            <img className="card-img" src={product.image} alt='product' />
                            <div className="card-info">
                                <p className="text-title">{product.name}</p>
                            </div>
                            <div className="card-footer">
                                <span className="text-title">${product.price}.00</span>
                                <IconButton className="card-button">
                                    <LocalGroceryStoreOutlinedIcon fontSize='small' className="svg-icon" viewBox="0 0 20 20" />
                                </IconButton>
                            </div>
                        </LinkRouter>
                    )) : <Error />}
                </div>
            </div>
        </div>
    );
}

