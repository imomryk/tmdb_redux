import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetails } from "../../store/actions"
import DetailsCard from "../DetailsCard"
import Header from "../Header"


export const DetailsPage =()=>{
    const id = useParams()
    const details = useSelector((state)=>state.details)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getDetails(id))
    },[id, dispatch])
    return(
        <>
        <Header/>
            {details ?  <DetailsCard /> : <div>Loading...</div> }
        </>
    )
}