import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* change <a> to <Link> tag and href -> to  for route */}
                  <a className="nav-link active" aria-current="page" href={props.menus.menu1.url}> {props.menus.menu1.label}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={props.menus.menu2.url}>{props.menus.menu2.label}</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href={props.menus.menu3.url} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.menus.menu3.label}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href={props.menus.menu3.submenu.submenu1.url}>{props.menus.menu3.submenu.submenu1.label}</a></li>
                    <li><a className="dropdown-item" href={props.menus.menu3.submenu.submenu2.url}>{props.menus.menu3.submenu.submenu2.label}</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href={props.menus.menu3.submenu.submenu3.url}>{props.menus.menu3.submenu.submenu3.label}</a></li>
                    <li><a className="dropdown-item" href={props.menus.menu3.submenu.submenu4.url}>{props.menus.menu3.submenu.submenu4.label}</a></li>
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


