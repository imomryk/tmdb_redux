import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";
import FavoritesPage from "./components/FavoritesPage";
import SearchPage from "./components/SearchPage";
import { getGenres } from "./store/actions";


function App() {
  console.log(localStorage)
  const dispatch = useDispatch()
  const favorites = useSelector(state=>state.favorites)
  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites))
    console.log(favorites)
  },[favorites])

  useEffect(()=>{
    dispatch(getGenres())
    // !!localStorage.getItem("favorites")?dispatch(setFavorites()):dispatch({type:SET_FAVORITES, payload:[]})
  })
  
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/details/:id" element={<DetailsPage/>}/>
          <Route path="/favorites" element={<FavoritesPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
