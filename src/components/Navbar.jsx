import {Link} from "react-router-dom";

const Navbar = (props) => {

    let userId = props.user.id

    return (
        <header>
            <nav className="nav_header">
                <h1 className="nav_title" >Ntrest</h1>
                <Link className="links" to={`/profile/${userId}`} >Profile</Link>
                <Link className="links" to='/feed' >Feed</Link>
                <Link className="links" to={`/mycart/${userId}`} >My Trips</Link>
                <Link className="links" to='/' >Log out</Link>
            </nav>
            <nav className="nav_bottom"></nav>
        </header>
    )
}

export default Navbar