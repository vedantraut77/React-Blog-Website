import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav-bar">     {/* use this classes for cssss */}
            <h1>THE BLOGGING WEBSITE</h1>
            <div className="links">
                <Link to='/'>Home</Link>   {/* provides spa functions */}
                <Link to="/Create" className="Nav-butt">New Blog</Link>
            </div>

        </nav >
    );
}

export default Navbar;