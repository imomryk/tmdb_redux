import { Link } from "react-router-dom"

export const Header=()=>{
    return (
      <header>
        <nav>
          <Link to={'/'}>Search</Link>
          <Link to={'/favorites'}>Favorites</Link>
        </nav>
      </header>
    );
}
