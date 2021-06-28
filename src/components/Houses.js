import { Link } from 'react-router-dom'

export default function Houses(props) {
    // in Houses.js
    console.log(props)
    const houseList = props.gameData.map((houseData, index) => {
        return(
            <li key={index}>
                <Link to={`/houses/${houseData.id}`}>
                    {houseData.name}
                </Link>
            </li>
        )
    })
return (
    <div>
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
        <ul className="list">
            <li>{houseList}</li>
        </ul>
    </div>
)

}