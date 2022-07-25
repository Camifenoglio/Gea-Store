import React from "react"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';


import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";


import '../../styles/addProductForm.css'

const popular = ['Yes', 'No']
const arrayCategories = ["Gluten free", "Sugar free", "Lactose free", "Vegan", "Canned food", "Sweets and jams", "Flours and more", "Cookies, bakery and more", "Nuts, seeds and more", "Snacks", "Rice and pasta", "Oils, dressings and more", "Sugar, sweeteners and more", "Broths, soups and sauces", "Cereals, granola and more", "Chocolate and more"]


export default function AddProductPage() {


    const [currency, setCurrency] = React.useState('');
    const [category, setCategory] = React.useState([]);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const categoryChange = (event) => {
        setCategory(event.target.value)
    }
    return (
        <div className="formContainerProduct_F">
            <Box className="form" component="form"  >

                <TextField
                    helperText="Please enter the product name"
                    id="produc-name"
                    label="Product Name"
                    variant="filled"
                />

                <TextField
                    id="outlined-multiline-static"
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
                    id="produc-name"
                    type='file'
                    variant="filled"
                />

                <TextField
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
                </TextField>


                <FormGroup className="checkbox_F" variant="filled">
                {arrayCategories.map((category) => (
                    <FormControlLabel  key={category} control={<Checkbox value={category} color="success"  />} label={category} />
                    ))}
                </FormGroup>

                <TextField
                    variant="filled"
                    helperText="Please enter the product stock"
                    id="produc-name"
                    label="Product Stock"
                />

                
                <TextField
                    helperText="Please upload the product information image "
                    id="produc-name"
                    type='file'
                    variant="filled"
                />


                <TextField
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

                </TextField>

                <Button type="submit" color="success" variant="contained" style={{height: '3rem'}}>Add Product</Button>
            </Box>
        </div>
    )
}