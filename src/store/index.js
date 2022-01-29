import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { SET_MOVIES, SET_QUERY} from "./types"



const reducer =(state={query:"Hello", movies:[]},action)=>{
    switch (action.type) {
        case SET_QUERY:
            return {...state, query:action.payload}
        case SET_MOVIES:
            return {...state, movies: action.payload.results}
        default:
            return state
    }
}
const store = createStore(reducer, applyMiddleware(thunk))

export default store