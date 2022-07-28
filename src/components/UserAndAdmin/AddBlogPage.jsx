
// REACT
import React, { useState } from "react"
import { useDispatch } from "react-redux";


//MUI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

//COMPONENTS AND ACTIONS
import blogActions from "../../redux/actions/blogActions";

//STYLE
import '../../styles/addProductForm.css'
import NavBarAdmin from "./NavBarAdmin";

export default function AddBlogPage() {

    const dispatch = useDispatch()

    // VAR DE ESTADO
    const [files, setFiles] = useState([])
    console.log(files)


    async function handleSubmit(event) {
        console.log(event)
        event.preventDefault()
        //console.log(event)

        const file = await files[0] //toma solamente el primer archivo subido
        console.log(file)
        const title = await event.target[0].value
        const description = await event.target[2].value
        console.log(title)
        console.log(description)


        // construccion de un nuevo formData
        const formData = await new FormData()
        formData.append('title', title)
        formData.append('fileUpload', file)
        formData.append('description', description)
        console.log(formData) //no es nada dice igna

        await dispatch(blogActions.createBlog(formData))

    }



    return (
        <>
            <NavBarAdmin />
            <div className="formContainerProduct_F">

                <Box className="form" component="form" onSubmit={handleSubmit} >

                    <TextField
                        helperText="Please enter the title"
                        id="blog-title"
                        label="Title"
                        variant="filled"
                    />

                    <TextField
                        helperText="Please upload an image"
                        id="produc-photo"
                        type='file'
                        variant="filled"
                        onChange={(event) => setFiles(event.target.files)}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="description"
                        multiline
                        rows={4}
                        variant="filled"
                    />
                    <Button

                        type="submit"
                        color="success"
                        variant="contained"
                        style={{ height: '3rem' }}>Add Blog</Button>
                </Box>

            </div>
        </>
    )
}