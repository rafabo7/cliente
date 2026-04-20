import { useEffect, useState } from "react"
import './styles/Form.css'

import { addExperience, updateExperience, selectEditingItem, selectExperience } from "../redux/expericenceSlice"
import { useDispatch, useSelector } from "react-redux"


export default function FormExperience() {

    const dispatch = useDispatch()

    const editingItem = useSelector(selectEditingItem)


    const [company, setCompany] = useState(editingItem?.company ?? '')
    const [role, setRole] = useState(editingItem?.role ?? '')
    const [startDate, setStartDate] = useState(editingItem?.startDate ?? '')
    const [endDate, setEndDate] = useState(editingItem?.endDate ?? '')
    const [description, setDescription] = useState(editingItem?.description ?? '')

    useEffect( () => {
        
        if ( editingItem === null ) return

        setCompany(editingItem.company)
        setRole(editingItem.role)
        setStartDate(editingItem.startDate)
        setEndDate(editingItem.endDate)
        setDescription(editingItem.description)
        
    } , [editingItem])

    function handleSubmit(e) {

        // const lastExperience = useSelector(selectExperience).slice(-1)
        // console.log(lastExperience.id);

        if (editingItem !== null) {
            changeExperience()
        } else {
            createExperience()
        }

        handleClear(e)


    }

    function createExperience() {
        dispatch(addExperience({
            // id: 1,
            role,
            company,
            startDate,
            endDate,
            description
        }))

    }

    function changeExperience() {
        dispatch(updateExperience({
            id: editingItem.id,
            role,
            company,
            startDate,
            endDate,
            description
        }))



    }

    function handleClear(e) {
        e.preventDefault()
        setRole('')
        setCompany('')
        setStartDate('')
        setEndDate('')
        setDescription('')
    }

    return (
        <form action="#" onSubmit={handleSubmit} >

            <label> Company
                <input
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}

                />
            </label>

            <label> Role
                <input
                    required
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}

                />
            </label>

            <label> Start date
                <input
                    required
                    type="month"
                    name=""
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </label>

            <label> End date
                <input
                    type="month"
                    name=""
                    value={endDate}
                    min={startDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </label>

            <label> Description
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}

                />
            </label>

            <button type="submit">Save</button>
            <button onClick={handleClear} >Clear</button>


        </form>
    )
}