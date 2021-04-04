import React from 'react'
import {NavLink,useRouteMatch} from'react-router-dom'


  function Header () {
    const match=useRouteMatch();
    console.log(match);
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
   <NavLink className="navbar-brand" to="/">
                {/* <img src={logo} alt="Logo"/> */}
            </NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <NavLink 
                    className="nav-link" 
                    to={`${match.url}/home`}
                    activeClassName={"active"}
                    >
                        Home
                    </NavLink>
                    </li>
                   <li className="nav-item">
                   <NavLink 
                    className="nav-link" 
                    to={`${match.url}/login`}
                    activeClassName={"active"}
                    >
                        Login
                    </NavLink>
                       </li> 
                       <li className="nav-item">
            <NavLink className="nav-link"  to={`${match.url}/register`} activeClassName={"active"}>
              Register
            </NavLink>
          </li>
                    
                </ul>
            </div>
</nav>
    )
}
export default Header;