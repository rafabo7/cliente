import { useDispatch, useSelector } from "react-redux"
import { deleteExperience, selectExperience, startUpdate } from "../redux/expericenceSlice"
import ListItem from "./ListItem"

import './styles/ListItem.css'

export default function List(){

    const dispatch = useDispatch()
    const experience = useSelector(selectExperience)


    function handleDelete(id) {        
        dispatch(deleteExperience(id))

    }

    function handleEdit(id) {
        dispatch(startUpdate(id))
    }

    

    return (
        <ul>
            { experience.length > 0 && <p> Work Experience </p> }
            { experience.map( 
                item => <ListItem
                            id={item.id}
                            key={item.id}
                            company={item.company}
                            role={item.role}
                            onDelete={ () => handleDelete(item.id)}
                            onEdit={ () => handleEdit(item.id) } 
                        />) }
        </ul>
    )
}