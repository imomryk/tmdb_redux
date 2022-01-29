import { Link } from "react-router-dom"

export const Header=()=>{
    return(
        <header>
            <Link to={"/"}>Search</Link>
            <Link to={"/watchlist"}>Watchlist</Link>
        </header>
    )
}