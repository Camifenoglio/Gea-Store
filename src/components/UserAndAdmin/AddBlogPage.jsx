// import React from "react"

// export default function AddBlogPage() {
//     return (
//         <>
//             <p>ADD BLOG</p>
//         </>
//     )
// }


import React from "react"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";


import '../../styles/addProductForm.css'



export default function AddBlogPage() {


    return (
        <div className="formContainerProduct_F">
            <Box className="form" component="form"  >

                <TextField
                    helperText="Please enter the title"
                    id="blog-title"
                    label="Title"
                    variant="filled"
                />

                <TextField
                    helperText="Please upload an image"
                    id="produc-name"
                    type='file'
                    variant="filled"
                />

                <TextField
                    id="outlined-multiline-static"
                    label="description"
                    multiline
                    rows={4}
                    variant="filled"
                />

                <Button type="submit" color="success" variant="contained" style={{height: '3rem'}}>Add Product</Button>
            </Box>
        </div>
    )
}