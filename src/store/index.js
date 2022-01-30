import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { ADD_FAVORITES, REMOVE_FAVORITES, SET_DETAILS, SET_GENRES, SET_MOVIES, SET_QUERY } from "./types"



const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_QUERY:
            return { ...state, query: action.payload }
        case SET_MOVIES:
            return { ...state, movies: action.payload.results }
        case SET_DETAILS:
            return { ...state, details: action.payload }
        case SET_GENRES:
            return { ...state, genres: action.payload.genres }
        
        case ADD_FAVORITES:
            return { ...state, favorites: [...state.favorites, action.payload] }
        case REMOVE_FAVORITES:
            return {...state, favorites: state.favorites.filter((favorites) => favorites.id !== action.payload)}
        default:
            return state
    }
}
let preloadedState ={
    query: "Cat",
    movies: [],
    genres:[]
}
const persistedFavorites = localStorage.getItem('favorites')

if (persistedFavorites) {
  preloadedState.favorites = JSON.parse(persistedFavorites)
}else preloadedState.favorites =[]
const store = createStore(reducer,preloadedState, applyMiddleware(thunk))

console.log(store.getState())
// store.subscribe(()=>{
//     localStorage.setItem("favorites",JSON.stringify(store.getState().favorites))
//     console.log(localStorage)
// })


export default store