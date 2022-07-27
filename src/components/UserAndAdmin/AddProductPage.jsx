//REACT
import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";

// MUI
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";

//COMPONENTS AND ACTIONS
import productsActions from "../../redux/actions/productsActions";
import NavBarAdmin from "./NavBarAdmin";

// STYLES
import '../../styles/addProductForm.css'

//const popular = ['Yes', 'No']
const arrayCategories = ["Gluten free", "Sugar free", "Lactose free", "Vegan", "Canned food", "Sweets and jams", "Flours and more", "Cookies, bakery and more", "Nuts, seeds and more", "Snacks", "Rice and pasta", "Oils, dressings and more", "Sugar, sweeteners and more", "Broths, soups and sauces", "Cereals, granola and more", "Chocolate and more"]


export default function AddProductPage() {


    //const [currency, setCurrency] = React.useState('');
    //const [category, setCategory] = React.useState([]);

    // const handleChange = (event) => {
    //     setCurrency(event.target.value);
    // };

    // const categoryChange = (event) => {
    //     setCategory(event.target.value)
    // }
    const dispatch = useDispatch()

    // VAR DE ESTADO
    const [files, setFiles] = useState([])
    const [filesTwo, setFilesTwo] = useState([])
    const [reload, setReload] = useState(false)
    const [categoryArray, setCategoryArray] = useState([]);
    console.log(categoryArray)

    const categoryCheck = (event) => {
        const index = categoryArray.indexOf(event.target.value)
        if (index === -1) {
            setCategoryArray([...categoryArray, event.target.value])
        } else {
            setCategoryArray(categoryArray.filter(category => category !== event.target.value))
        }
<<<<<<< HEAD
    }
=======
        // if (checked === true) {
        // setChecked(event.target.value);
    }


>>>>>>> 8253dad6e5cff64c3101ce3b0ea62e97de1ef30c


    async function handleSubmit(event) {
        event.preventDefault()
        console.log(event)

        const file = await files[0]
        const fileTwo = await filesTwo[0]
        console.log(files)
        console.log(filesTwo)

        const name = await event.target[0].value
        const description = await event.target[1].value
        const price = await Number(event.target[3].value)
        const stock = await Number(event.target[21].value)
        console.log(stock)

        // construccion de un nuevo formData
        const formData = await new FormData()
            formData.append('name', name)
            formData.append('description', description)
            formData.append('price', price)
            formData.append('image', file)
            formData.append('category', await categoryArray)
            formData.append('stock', stock)
            formData.append('imageInfo', fileTwo)
        console.log(formData) // si todo sale bien, deberia no traer nada
        console.log(categoryArray)
        await dispatch(productsActions.createProduct(formData))
    }

    return (
        <>
            <NavBarAdmin />
            <div className="formContainerProduct_F">
<<<<<<< HEAD

                <Box className="form" component="form" onSubmit={handleSubmit} >

                    <TextField
                        helperText="Please enter the product name"
                        id="produc-name"
                        label="Product Name"
                        variant="filled"
                    />

                    <TextField
                        id="product-description"
                        label="Multiline"
                        multiline
                        rows={4}
                        variant="filled"
                    />

                    <TextField
                        helperText="Please enter the product price"
                        id="price"
                        label="Price"
                        variant="filled"
                        type='number'
                        startadornment={<InputAdornment position="start">$</InputAdornment>}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoneyIcon />
                                </InputAdornment>)
                        }}
                    />


                    <TextField
                        helperText="Please upload the product image"
                        id="produc-image"
                        type='file'
                        variant="filled"
                        onChange={(event) => setFiles(event.target.files)}
                    />

                    <div className="checkbox_F" variant="filled">
                        {arrayCategories.map((category, index) => (
                            <FormControlLabel
                                key={index}
                                label={category}
                                value={category}
                                id={index}
                                control={<Checkbox
                                    checked={categoryArray.includes(category)}
                                    onChange={categoryCheck}
                                    color="success"
                                />}
                            />
                        ))}
                    </div>

                    <TextField
                        variant="filled"
                        helperText="Please enter the product stock"
                        id="produc-stock"
                        type='number'
                        label="Product Stock"
                    />

                    <TextField
                        helperText="Please upload the product information image "
                        id="produc-image"
                        type='file'
                        variant="filled"
                        onChange={(event) => setFilesTwo(event.target.files)}
                    />


=======


                <Box className="form" component="form" onSubmit={handleSubmit} >

                    <TextField
                        helperText="Please enter the product name"
                        id="produc-name"
                        label="Product Name"
                        variant="filled"
                    />

                    <TextField
                        id="product-description"
                        label="Multiline"
                        multiline
                        rows={4}
                        variant="filled"
                    />

                    <TextField
                        helperText="Please enter the product price"
                        id="price"
                        label="Price"
                        variant="filled"
                        startadornment={<InputAdornment position="start">$</InputAdornment>}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoneyIcon />
                                </InputAdornment>)
                        }}
                    />


                    <TextField
                        helperText="Please upload the product image"
                        id="produc-image"
                        type='file'
                        variant="filled"
                        onChange={(event) => setFiles(event.target.files)}
                    />

                    {/* <TextField
                    select
                    helperText="Please select the category product"
                    id="product-category"
                    label="Category"
                    variant="filled"
                    value={category}
                    onChange={categoryChange}
                >
                    {arrayCategories.map((category) => (
                        <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                </TextField> */}

                    <div className="checkbox_F" variant="filled">
                        {arrayCategories.map((category, index) => (
                            // <div key={index} onClick={categoryCheck}>
                            //     <label>{category}</label>
                            //     <input  type="checkbox"
                            //             value={category}

                            //     />
                            // </div>
                            <FormControlLabel
                                key={index}
                                label={category}
                                //onChange={(event) => setChecked(event.target.value)}
                                id={index}
                                control={<Checkbox
                                    //checked={checked}
                                    value={category}
                                    onClick={categoryCheck}
                                    color="success"
                                />}
                            />

                            // <FormControlLabel  control={<Checkbox  key={category} id="category-check" value={category} color="success"
                            // onChange={handleChange}  />} label={category}
                            // />
                        ))}
                    </div>

                    <TextField
                        variant="filled"
                        helperText="Please enter the product stock"
                        id="produc-name"
                        label="Product Stock"
                    />


                    <TextField
                        helperText="Please upload the product information image "
                        id="produc-image"
                        type='file'
                        variant="filled"
                        onChange={(event) => setFilesTwo(event.target.files)}
                    />


>>>>>>> 8253dad6e5cff64c3101ce3b0ea62e97de1ef30c
                    {/* <TextField
                    select
                    label="Popular product"
                    helperText="Please select if the product is popular"
                    value={currency}
                    onChange={handleChange}
                    variant="filled"
                >

                    {popular.map((option) => (
                        <MenuItem key={option} value={option} >{option}</MenuItem>
                    ))}

                </TextField> */}

                    <Button type="submit" color="success" variant="contained" style={{ height: '3rem' }}>Add Product</Button>
                </Box>
            </div>
        </>
    )
}