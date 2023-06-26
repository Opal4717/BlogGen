import { Link } from 'react-router-dom'

const Navbar = (e) => {
    return (
        <nav className="navbar">
            <h1>The Derpy Blog</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/create">New Blog</Link>
                </div>
        </nav>
    )
}

export default Navbar;