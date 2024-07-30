import { Link } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
    return (
        // <div className="NavBar">
        //     <h1>This is the NavBar!</h1>
        // </div>
        <nav>

            <Link to='/'>
                <p>Login</p>
            </Link>

            <Link to='/home'>
                <p>
                    Home<img src='src/assets/fs-logo.png' alt="logo" className="logo" />
                </p>
            </Link>

            <Link to='/players'>
                <p>Player Directory</p>
            </Link>

            <Link to='/players/:new'>
                <p>Create Your Player!</p>
            </Link>

            <Link to='players/add'>
                <p>Create Your Team! </p>
            </Link>

            <Link to='/players/:id'>
                <p>Search for Player</p>
            </Link>

            <Link to='/players/:id/edit'>
                <p>Edit Player/Team</p>
            </Link>

            <Link to='/about'>
                <p>About</p>
            </Link>

        </nav>
    )
}