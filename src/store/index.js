import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { SET_DETAILS, SET_GENRES, SET_MOVIES, SET_QUERY } from "./types"



const reducer = (state = { query: "Cat", movies: [] }, action) => {
    switch (action.type) {
        case SET_QUERY:
            return { ...state, query: action.payload }
        case SET_MOVIES:
            return { ...state, movies: action.payload.results }
        case SET_DETAILS:
            return { ...state, details: action.payload }
        case SET_GENRES:
            return {...state, genres: action.payload.genres}
        default:
            return state
    }
}
const store = createStore(reducer, applyMiddleware(thunk))

export default store