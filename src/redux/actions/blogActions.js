import axios from 'axios';
import urlBack  from '../../urlBack';

const blogActions = {
    // getBlogs: () => {
    //     return async (dispatch, getState) => {
    //         try {
    //             const res = await axios.get( urlBack + '/api/products' );
    //             dispatch({ type: 'GET_PRODUCTS', payload: res.data.response });
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // },
    // getOneBlog: (id) => {
    //     return async (dispatch, getState) => {
    //         try {
    //             const res = await axios.get( urlBack + `/api/products/${id.id}` );
    //             //console.log(res)
    //             dispatch({ type: 'GET_ONE_PRODUCT', payload: res.data.response });
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     }
    // },
    createBlog: (formData) => {
        console.log(formData)
        return async (dispatch, getState) => {
            try {
                await axios.post( urlBack + '/api/addblog', formData );
                //await axios.post( `http://localhost:4000/api/addblog`, formData );
            } catch (error) {
                console.log(error)
            }
        }
    },
    // modifyBlog: (id, product) => {
    //     return async (dispatch, getState) => {
    //         try {
    //             const res = await axios.put( urlBack + `/api/products/${id}` , product );
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // },
    // deleteBlog: (id) => {
    //     return async (dispatch, getState) => {
    //         try {
    //             const res = await axios.delete( urlBack + `/api/products/${id}` );
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // },
}

export default blogActions;