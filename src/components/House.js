import { Link } from 'react-router-dom'

export default function House(props) {
    // in House.js
    console.log(props.people)
    const people = props.people.map((memberData, index) => {
        return(
            <li key={index}>
                <Link to={`/houses/:id/members/${memberData.id}`}>
                {memberData.name}
                </Link>
            </li>
        )
    })
return (
    <div className="page">
        <div className="header">
            <h1>{props.name}</h1>
        </div>
        <ul className="list">
            <li><h4>{people}</h4></li>
        </ul>
    </div>
)

}