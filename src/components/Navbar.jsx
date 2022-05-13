import {Link} from "react-router-dom";

const Navbar = (props) => {

    return (
        <header>
            <nav className="nav_header">
                <h1 className="nav_title" >Ntrest</h1>
                <Link className="links" to='/profile' >Profile</Link>
                <Link className="links" to='/feed' >Feed</Link>
                <Link className="links" to='/mycart' >My Trips</Link>
                <Link className="links" to='/' >Log out</Link>
            </nav>
            <nav className="nav_bottom"></nav>
        </header>
    )
}

export default Navbar