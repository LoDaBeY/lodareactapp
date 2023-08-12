import React from 'react'
//call the css file to make it more organizing
import './header.css'
function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Khaled <span className="logoname">Ghonim</span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-1 mb-md-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Translation
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                EN&lt;&gt;AR
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                TR&lt;&gt;AR
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Subtitling
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                EN&lt;&gt;AR
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                TR&lt;&gt;AR
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Transcription
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                EN&lt;&gt;AR
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                TR&lt;&gt;AR
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="toggle m-1">
        <button id="dark-mode-toggle">Dark Mode</button>
      </div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header