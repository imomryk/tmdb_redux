import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions";
import { SET_QUERY } from "../../store/types";


export const SearchForm = () => {
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const setQuery = (event) => {
    dispatch({
      type: SET_QUERY,
      payload: document.getElementById("queryField").value,
    });
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(getMovies(query));
  }, [query, dispatch]);
  return (
    <form onSubmit={setQuery}>
      <input type="text" id="queryField" />
      <button>search</button>
    </form>
  );
};
