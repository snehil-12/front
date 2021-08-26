import React from 'react'
import { Link} from 'react-router-dom'



function NavBar() {
      
    return (
        <div className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <div className="React" >REACT PROJECT</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
    
        <ul className="navbar-nav  mb-2 mb-lg-0  justify-content-end text-primary">
        <li className="nav-item">
          <Link  className="nav-link"  to="/home">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to={{pathname:`/addData`,state:{mode:"create"}}}>ADD DATA</Link>
        </li>  
        </ul>
        </div>
        </nav>
        </div>
    )
}

export default NavBar
