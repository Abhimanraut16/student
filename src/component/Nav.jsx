import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#"><span>Home</span>work</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>   <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="about">About</Link>
              </li>   <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="address">Address</Link>
              </li>   <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="mobile">Mobile</Link>
              </li>   <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="student">Students</Link>
              </li>
      

            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Nav