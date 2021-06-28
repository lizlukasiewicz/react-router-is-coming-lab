import {Link} from 'react-router-dom'

export default function Home() {
    return(
        <div>
            <ul>
                <li><Link to="/houses">List of Houses</Link> </li>
                <li><Link to="/members">List of Characters</Link> </li>
            </ul>
        </div>
    )
}