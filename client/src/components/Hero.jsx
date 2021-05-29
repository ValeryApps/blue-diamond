import React from 'react'
import { NavLink } from 'react-router-dom'
//import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div>
             <section id="hero" className="d-flex align-items-center">
        <div
          className="container text-center position-relative"
          
        >
          <h1 data-aos="fade-down"
          data-aos-delay="200" className="display-1">Alliance Francaise Monrovia</h1>
          <h2 data-aos="fade-up"
          data-aos-delay="200">
           Promoting the culture of the French speaking countries and the Francophony
          </h2>
          {/* <img src="/assets/exp.png" alt="" style={{width:'400px', height:'90px'}}/> */}
          <br/>
          <NavLink to="/courses" className="btn-get-started scrollto nav-link" data-aos="fade-right"
          data-aos-delay="200">
            Get Started
          </NavLink>
        </div>
      </section>
        </div>
    )
}

export default Hero
