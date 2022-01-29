import axios from "axios";
import { apiKey, baseUrl } from "../config";
import { SET_DETAILS, SET_GENRES, SET_MOVIES } from "./types";

export const getMovies =(query = "Hello")=>{
    return async (dispatch) =>{
        const response =  axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`)
        console.log((await response).data)
        dispatch(setMovies((await response).data))
    }
}

export const setMovies =(result)=>({type:SET_MOVIES, payload:result})

export const getDetails =({id})=>{
    return async (dispatch) =>{
        const response = axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
        console.log((await response).data)
        dispatch(setDetails((await response).data))
    }
}

export const setDetails = (result)=>({type:SET_DETAILS, payload:result})

export const getGenres =()=>{
    return async (dispatch)=>{
        const response = axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
        console.log((await response).data.genres)
        dispatch(setGenres((await response).data))
    }
}

export const setGenres =(result)=>({type: SET_GENRES, payload:result})

export const setFavorites=(id,name)=>{

}

export const getFavorites=()=>{
    
}