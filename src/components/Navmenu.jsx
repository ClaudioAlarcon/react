import { NavLink } from "react-router-dom"

const Navmenu = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                <NavLink to="example1" className="btn btn-outline-primary">Example 1</NavLink>
                <NavLink to="example2" className="btn btn-outline-primary">Example 2</NavLink>
            </div>
        </nav>
    )
}

export default Navmenu
