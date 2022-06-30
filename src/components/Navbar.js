import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={props.menus.menu1.url}> {props.menus.menu1.label}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={props.menus.menu2.url}>{props.menus.menu2.label}</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to={props.menus.menu3.url} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.menus.menu3.label}
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to={props.menus.menu3.submenu.submenu1.url}>{props.menus.menu3.submenu.submenu1.label}</Link></li>
                    <li><Link className="dropdown-item" to={props.menus.menu3.submenu.submenu2.url}>{props.menus.menu3.submenu.submenu2.label}</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to={props.menus.menu3.submenu.submenu3.url}>{props.menus.menu3.submenu.submenu3.label}</Link></li>
                    <li><Link className="dropdown-item" to={props.menus.menu3.submenu.submenu4.url}>{props.menus.menu3.submenu.submenu4.label}</Link></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
      </nav>
    )
}

export default Navbar

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  menu1: PropTypes.string,
  menu2: PropTypes.string,
  menu3: PropTypes.string,
  submenu1: PropTypes.string,
  submenu2: PropTypes.string,
  submenu3: PropTypes.string,
  submenu4: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Set Site Title',
  menu1: "Menu One",
  menu2: "Menu Two",
  menu3: "Menu Three",
  submenu1: "SubMenu One",
  submenu2: "SubMenu Two",
  submenu3: "SubMenu Three",
  submenu4: "SubMenu Four"
}


