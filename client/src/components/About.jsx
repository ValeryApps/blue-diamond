import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            
        <section id="about" className="about">
          <div className="container">
            <div className="row content">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img src="/assets/img/about-us.png" className="img-fluid" alt=""/>
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequa
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in
                  </li>
                </ul>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <Link to="#" className="btn bg-alliance btn-lg"><i className="fas fa-info-circle"></i> Find out more</Link>
            </div>
          </div>
        </section>
        </>
    )
}

export default About
