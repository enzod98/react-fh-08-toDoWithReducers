import { Link, NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded-3">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${ isActive && 'active' }`} to="/">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${ isActive && 'active' }`} to="/Login">
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${ isActive && 'active' }`} to="/About">
                    About
                </NavLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>
)
}
