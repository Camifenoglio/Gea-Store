const initialState = {
    post: [],
    onePost: [],
    auxPosting: []
}

const blogReducer = (state = initialState, action) => {
    //console.log(action)
    //console.log(state)
    switch(action.type) {
        case 'GET_POST':
            return {
                ...state,
                topics: action.payload
            }
        case 'GET_ONE':
            return {
                ...state,
                oneTopic: action.payload
            }
        case 'MOD_POST':
            return {
                ...state,
                auxTopic: action.payload
            }
        case 'UPD_POST':
            let topics = [...state.topics]
            topics.push(action.payload)
            return{
                ...state,
                topics: action.payload,
                auxTopics: [...topics]
            }
        case 'DEL_POST':
            return {
                ...state,
                topics: action.payload
            }
        default:
            return state
    }
}
export default blogReducer