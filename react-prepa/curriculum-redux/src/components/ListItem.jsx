

export default function ListItem({ id, company, role, onDelete, onEdit }) {




    return(
        <li className="side-list-item" >
            <div className="side-list-info">
                <p className="company" > {company} </p>
                <p className="role"> {role} </p>
            </div>
            <button onClick={onDelete} > ❌ </button>
            <button onClick={onEdit} > 🖋️ </button>

        </li>
    )
}