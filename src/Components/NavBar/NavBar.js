import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './NavBar.css'

const NavBar = () => {
  const [loggedinuser, setloggedinuser]=useContext(UserContext)
  console.log(loggedinuser);
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid text-light">
    <h1>City Cab</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/home' className="nav-link text-light" >Home</Link>
        <Link to='/login' className="nav-link text-light">Destination</Link>
        <Link to='/contact' className="nav-link text-light">Contact</Link>
        <Link to='/blog' className="nav-link text-light" >Blog</Link>
        {loggedinuser.isSignedIn?<Link to='/profile' className="nav-link btn btn-danger text-light text-light px-3 rounded-pill">{loggedinuser.displayName}</Link>: <Link to='/login' className="nav-link text-light btn btn-danger px-3 rounded-pill">Login</Link>}
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;