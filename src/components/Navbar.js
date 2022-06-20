import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">{props.menu1}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">{props.menu2}</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.menu3}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/">{props.submenu1}</a></li>
                    <li><a className="dropdown-item" href="/">{props.submenu2}</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">{props.submenu3}</a></li>
                    <li><a className="dropdown-item" href="/">{props.submenu4}</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
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


