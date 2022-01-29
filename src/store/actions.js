import axios from "axios";
import { SET_MOVIES } from "./types";

export const getMovies =(query = "Hello")=>{
    return async (dispatch) =>{
        const response =  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=dc2aedd2b98affe3cb1bd3a0d9a6d78e&query=${query}`)
        console.log((await response).data)
        dispatch(setMovies((await response).data))
    }
}
export const setMovies =(result)=>({type:SET_MOVIES, payload:result})
