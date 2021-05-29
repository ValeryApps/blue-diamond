import React from 'react'
import { Link } from 'react-scroll'

const Header = ({scrollTop}) => {
    return (
        <>
     <header  className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center">
            <div className="logo mr-auto">
              <h1 className="text-light">
                <Link to="index.html">
                  <span>Bethany</span>
                </Link>
              </h1>

              <Link to="index.html">
                <img src="assets/img/logo.png" alt="" className="img-fluid" />
              </Link>
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <Link
                    onClick={scrollTop}
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true} duration={1000} 
                  style={{ cursor: "pointer" }} >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    style={{ cursor: "pointer" }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    style={{ cursor: "pointer" }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    style={{ cursor: "pointer" }}
                  >
                    Team
                  </Link>
                </li>
                <li
                  className="drop-down"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  style={{ cursor: "pointer" }}
                >
                  <Link to="">Drop Down</Link>
                  <ul>
                    <li>
                      <Link to="#" style={{ cursor: "pointer" }}>
                        Drop Down 1
                      </Link>
                    </li>
                    <li className="drop-down">
                      <Link to="#" style={{ cursor: "pointer" }}>
                        Drop Down 2
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">Deep Drop Down 1</Link>
                        </li>
                        <li>
                          <Link to="#">Deep Drop Down 2</Link>
                        </li>
                        <li>
                          <Link to="#">Deep Drop Down 3</Link>
                        </li>
                        <li>
                          <Link to="#">Deep Drop Down 4</Link>
                        </li>
                        <li>
                          <Link to="#">Deep Drop Down 5</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">Drop Down 3</Link>
                    </li>
                    <li>
                      <Link to="#">Drop Down 4</Link>
                    </li>
                    <li>
                      <Link to="#">Drop Down 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </Link>
                </li>

                <li className="get-started">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    style={{ cursor: "pointer" }}
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
        </>
    )
}

export default Header
