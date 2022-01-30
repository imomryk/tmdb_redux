import { useDispatch, useSelector } from "react-redux"
import { ADD_FAVORITES, REMOVE_FAVORITES } from "../../store/types"

export const FavoritesButton =({id,title})=>{
    const favorites = useSelector(state=>state.favorites)
    const dispatch = useDispatch()
    const isFavorite = favorites.some(elem=>{
      return elem.id===id
    })
    return(
        isFavorite?
        <button onClick={()=>{dispatch({type: REMOVE_FAVORITES, payload:id})}}>Delete from favorites</button>
        :
        <button onClick={()=>{dispatch({type:ADD_FAVORITES, payload:{id,title}})}}>Add to favorites</button>
    )
}