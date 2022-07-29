const initialState = {
    post: [],
    onePost: [],
    auxPosting: []
}

const blogReducer = (state = initialState, action) => {
    // console.log(action)
    console.log(state)
    switch (action.type) {

        case 'GET_POSTS':

            return {
                ...state,
                post: action.payload,

            }
        case 'GET_ONE':
            return {
                ...state,
                onePost: action.payload
            }
        case 'MOD_POST':
            return {
                ...state,
                onePost: action.payload
            }
        case 'UPD_POST':
            let post = [...state.post]
            post.push(action.payload)
            return {
                ...state,
                post: action.payload,
                auxPosting: [...post]
            }
        case 'DEL_POST':
            return {
                ...state,
                post: action.payload
            }
        default:
            return state
    }
}
export default blogReducer