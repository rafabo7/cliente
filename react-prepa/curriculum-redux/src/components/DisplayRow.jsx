import './styles/DisplayRow.css'

export default function DisplayRow({ id, company, role, starDate, endDate, description }) {

  
    

    return(
        <div className="card" >
            <h1 className="company" > {company} </h1>
            <p className="role" > {role} </p>
            <p className="dates" > {starDate} to {endDate} </p>
            <p className="description" > {description} </p>
        </div>
    )
}