//REACT
import React, { useState }  from "react"
import { useDispatch} from "react-redux";


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

// STYLES
import '../../styles/addProductForm.css'

const popular = ['Yes', 'No']
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
    console.log(files)


    async function handleSubmit(event){
        event.preventDefault()
        console.log(event)

    const file = await files
    // const file = await files[0] //toma solamente el primer archivo subido
    // console.log(file)
    //     const title = await event.target[0].value
    //     const description = await event.target[2].value
    //     console.log(title)
    //     console.log(description)


    // // construccion de un nuevo formData
    // const formData = await new FormData()
    //     formData.append('title', title)
    //     formData.append('fileUpload', file)
    //     formData.append('description', description)
    //     console.log(formData) //no es nada dice igna
    
    // await dispatch(productsActions.createProduct(formData))

}

    return (
        <div className="formContainerProduct_F">
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
                    onChange={(event)=>setFiles(event.target.files)}
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
                    id="produc-image"
                    type='file'
                    variant="filled"
                    onChange={(event)=>setFilesTwo(event.target.files)}
                />


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

                <Button type="submit" color="success" variant="contained" style={{height: '3rem'}}>Add Product</Button>
            </Box>
        </div>
    )
}