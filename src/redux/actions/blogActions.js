import axios from 'axios';
import urlBack  from '../../urlBack';

const blogActions = {
    createBlog: (formData) => {
        console.log(formData)
        return async (dispatch, getState) => {
            try {
                const res = await axios.post( urlBack + '/api/addblog', formData );
                //await axios.post( `http://localhost:4000/api/addblog`, formData );
            } catch (error) {
                console.log(error)
            }
        }
    },
    getPosts: () => {
        return async(dispatch, getState) => {
            const answer = await axios.get(urlBack +`api/post`)
            dispatch({type:'GET_POSTS', payload:answer.data.response.topics})
            return answer.data.response.post
        }
    },

    getOnePost: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(urlBack +`api/post/${id}`)
                
                return answer.data.response.post
            }catch (err) {
                console.log(err)
            }
        }
    },

    uploadPost: (post)=>{
        console.log(post)
        const token = localStorage.getItem("token")
        return async(dispatch,getState) => {
            const answer = await axios.post(urlBack +"api/post", {...post} ,
                {headers:{ Authorization: `Bearer ${token}`}})
            dispatch({type:'UPD_POST', payload:answer.data.response.newPost})
            return answer.data.response.newPost
        }
    },

    modifyPost: (post) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const answer = await axios.put(urlBack +"api/posts",{...post},
                {headers: {Authorization: `Bearer ${token}`}})
            dispatch({type:'MOD_POST', payload:answer.data.response})
            return answer.data.response
        }
    },

    deletePost: (id) => {
        const token = localStorage.getItem("token")
        return async(dispatch, getState) => {
            try {
                const answer = await axios.post(urlBack +`api/posts/${id}`,{},
                    {headers:{ Authorization: `Bearer ${token}`}})
                dispatch({type:'DEL_POST', payload:answer.data.response})
            }catch (err) {
                console.log(err)
            }
        }
    },

    likePost: (id) => {
        const token = localStorage.getItem('token')
        return async() => {
            try {
                const answer = await axios.put(urlBack +`api/posts/likes/${id}`,{},
                    {headers: {Authorization: "Bearer "+token}})
                return answer.data.response
            }catch (err) {
                console.log(err)
            }
        }
    },

    addComment: (comment) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const answer = await axios.post(urlBack +`api/comments`,{...comment},
                    {headers: {'Authorization': "Bearer "+token}})
                dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
                })
                console.log(answer.data.response)
                return answer.data.response
        }
    },

    modifyComment: (comment) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const answer = await axios.put(urlBack +`api/comments`,{...comment},
                {headers: {Authorization: "Bearer "+token}})
            dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
            })
            return answer.data.response
        }
    },

    deleteComment: (id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const answer = await axios.post(urlBack +`api/comments/${id}`,{},
                {headers: {Authorization: "Bearer "+token}})
            dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
            })
        }
    }
}

export default blogActions;