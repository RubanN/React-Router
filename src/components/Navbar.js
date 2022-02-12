import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    return (
        <nav className="primary-nav">
            {/* <NavLink style={navLinkStyles} to="/">Home</NavLink>
            <NavLink style={navLinkStyles} to='Admin' >Admin</NavLink>
            <NavLink style={navLinkStyles} to='user'>User</NavLink> */}

            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}
        </nav>
    )
}
