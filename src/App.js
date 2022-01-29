import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";
import SearchPage from "./components/SearchPage";
import { WatchlistPage } from "./components/WatchlistPage/WatchlistPage";
import { getGenres } from "./store/actions";

function App() {
  console.log(localStorage)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getGenres())
  })

  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/details/:id" element={<DetailsPage/>}/>
          <Route path="/watchlist" element={<WatchlistPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
