import React from 'react'

const Counter = () => {
    return (
        <>
            <section id="counts" className="counts">
          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center" data-aos="fade-up"
          data-aos-delay="200">
                <span data-toggle="counter-up">42</span>
                <p className="mt-2">Students</p>
              </div>

              <div className="col-lg-3 col-6 text-center" data-aos="fade-left"
          data-aos-delay="200">
                <span data-toggle="counter-up">21</span>
                <p className="mt-2">Different Courses</p>
              </div>

              <div className="col-lg-3 col-6 text-center" data-aos="fade-right"
          data-aos-delay="200">
                <span data-toggle="counter-up">1,463</span>
                <p className="mt-2">Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center" data-aos="fade-down"
          data-aos-delay="200">
                <span data-toggle="counter-up">15</span>
                <p className="mt-2">Hard Workers</p>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Counter
