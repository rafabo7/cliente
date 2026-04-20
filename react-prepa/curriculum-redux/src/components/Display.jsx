import DisplayRow from "./DisplayRow";

import { selectExperience } from "../redux/expericenceSlice";
import { useSelector } from "react-redux";

export default function Display() {

    const experience = useSelector(selectExperience)

    
    

    return (
        <>
            {
                experience.map( (item, index) => {
                return <DisplayRow 
                    key={item.id}
                    id={item.id}
                    company={item.company}
                    role={item.role}
                    starDate={item.startDate}
                    endDate={item.endDate}
                    description={item.description}
                />
            } )
            }
        </>
    )
}