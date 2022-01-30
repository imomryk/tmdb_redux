import { useSelector } from "react-redux";
import Header from "../Header";
import FavoritesElem from "./FavoritesElem";

export const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites.length);
  return (
    <>
      <Header />
      {favorites.length > 0 ? (
        favorites.map((elem) => {
          return <FavoritesElem key={elem.id} id={elem.id} title={elem.title} />;
        })
      ) : (
        <div>No favorites</div>
      )}
    </>
  );
};
