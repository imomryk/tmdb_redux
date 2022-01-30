import { Link } from "react-router-dom"
import FavoritesButton from "../../FavoritesButton"


export const FavoritesElem =({id,title})=>{
    return(
        <>
        
        <div>
            <Link to={`/details/${id}`}>{title}</Link>
            <FavoritesButton id={id} title={title}/>
        </div>
        </>
        
    )
}