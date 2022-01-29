import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getMovies } from "./store/actions"
import { SET_QUERY } from "./store/types"



function App() {
  const query = useSelector((state) => state.query)
  const movies = useSelector((state) => state.movies)

  const dispatch = useDispatch()

  const handleRequest = (event) => {
    dispatch({ type: SET_QUERY, payload: document.getElementById("queryField").value })
    event.preventDefault()
  }


  useEffect(() => {
    dispatch(getMovies(query))
  }, [query, dispatch])


  return (
    <>
      <form onSubmit={handleRequest}>
        <input type="text" id="queryField" />
        <button>search</button>
      </form>
      {movies.map(({ title }) => {
        return (
          <h2>{title}</h2>
        )
      })}
    </>


  );
}

export default App;
