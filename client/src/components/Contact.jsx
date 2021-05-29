import React from "react";
import {Link} from "react-router-dom"
const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                  title="unique-title"
                    width="720"
                    height="310"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=us%20embassy%20monrovia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                  ></iframe>
                  <Link to="https://123movies-to.org"></Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="container">

 <div className="row  mx-auto">
              <div className="col-md-6" data-aos="fade-down" data-aos-delay="100">
                <div className="info mt-4">
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p className="lead">Mamba Point, Monrovia, Liberia</p>
                  <p>Opposite the new French Embassy, behind the US Embassy</p>
                </div>
                <div className="row">
                  <div className="col-lg-12 mt-4">
                    <div className="info">
                      <i className="icofont-envelope"></i>
                      <h4>Email:</h4>
                      <p >af@example.com</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="info w-100 mt-4">
                      <i className="icofont-phone"></i>
                      <h4>Call:</h4>
                      <p>+231 0776 589 443</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6  " data-aos="fade-up" data-aos-delay="100">
              <form className=" mt-4 php-email-form">
              <h3 className="text-center">For any additional info</h3>
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
