import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
             <section id="services" className="services section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-title" data-aos="fade-right">
                  <h2>Classes</h2>
                  <p>
                    Magnam dolores commodi suscipit nemo qui impedit suscipit
                    alias ea. Quia fugiat sit in iste officiis commodi quidem
                    hic quas.
                  </p>
                </div>
                <img src="/assets/img/services.png" style={{width:'350px'}} data-aos="fade-left" alt=""/>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="icon">
                        <i className="bx bxl-dribbble"></i>
                      </div>
                      <h4>
                        <Link to="">Initiation classes</Link>
                      </h4>
                      <p>
                        Voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="icon">
                        <i className="bx bx-file"></i>
                      </div>
                      <h4>
                        <Link to="">Begginners classes</Link>
                      </h4>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div className="icon">
                        <i className="bx bx-tachometer"></i>
                      </div>
                      <h4>
                        <Link to="">Advanced beginners Classes</Link>
                      </h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <div className="icon">
                        <i className="bx bx-world"></i>
                      </div>
                      <h4>
                        <Link to="">Intermediate Classes</Link>
                      </h4>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center my-3">
              <Link to="#" className="btn bg-alliance btn-lg"> <i className="fas fa-cogs"></i> Enroll now !</Link>
            </div>
          </div>
        </section>
        </>
    )
}

export default Services
