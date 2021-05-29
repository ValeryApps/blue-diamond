import React from "react";
import { Link } from "react-scroll";
import About from "./components/About";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimotials from "./components/Testimotials";
import WhyUs from "./components/WhyUs";
import Typewriter from "typewriter-effect"

const Home = () => {
  // const scrollTop = ()=>{
  //     scroll.scrollToTop();
  // }
  const src1 = "assets/img/testimonials/testimonials-5.jpg";
  const src2 = "assets/img/testimonials/testimonials-2.jpg";
  const src3 = "assets/img/testimonials/testimonials-4.jpg";
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
  
        <div className="container">
          <div className="header-container d-flex align-items-center">
            <div className="logo mr-auto">
              {/* <h1 className="text-light">
                <Link className="navbar-brand">
                  <span>Bethany</span>
                </Link>
              </h1> */}
              <Link to="hero" spy={true} smooth={true} duration={1500}>
                <img src="alliance.jpg" alt="" className="img-fluid" />
              </Link>
            </div>
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-alliance ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/* <Link className="navbar-brand">Brand</Link> */}
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link
                      className="nav-link"
                      to="hero"
                      smooth={true}
                      duration={1500}
                    >
                      Home <span className="sr-only">(current)</span>{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="about"
                      smooth={true}
                      duration={1500}
                    >
                      About{" "}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="team"
                      smooth={true}
                      duration={1500}
                    >
                      Team{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="contact"
                      smooth={true}
                      duration={1500}
                    >
                      Contact{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="services"
                      smooth={true}
                      duration={1500}
                    >
                      Services{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="testimonials"
                      smooth={true}
                      duration={1500}
                    >
                      Testimonials{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="why-us"
                      smooth={true}
                      duration={1500}
                    >
                      Why US{" "}
                    </Link>
                  </li>
                  
                </ul>
                {/* <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                  </li>
                </ul> */}
              </div>
            </nav>
          </div>
         <div className="container">
         <div className="row">
           <div className="col-md-6 mx-auto text-white">
             <h2>

           <Typewriter
  options={{
    strings: ['This website is still under construction !', 'Thank you'],
    autoStart: true,
    loop: true,
  }}
/>
  </h2>
           </div>
         </div>
         </div>
        </div>
       
      </header>
      
      {/* <!-- ======= Hero Section ======= --> */}
     <Hero/>

      <main id="main">
        {/* <!-- ======= Clients Section ======= --> */}
        {/* <Client/> */}
        <About/>

        <Counter/>

       <WhyUs/>

        <section id="cta" className="cta">
          <div className="container">
            <div className="text-center" data-aos="zoom-in">
              <h3>Enroll now</h3>
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Link className="cta-btn nav-link" to="#">
               Enroll now and start your journey
              </Link>
            </div>
          </div>
        </section>
      {/* Services section  */}
       <Services/>
 {/* portifolio section  */}
       {/* <Portifolio/> */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="row">
 
                <div className="section-title" data-aos="fade-right">
                  <h2 className="text-white">Testimonials</h2>
                </div>
            </div>
                <div className="row">
                  <div className="col-lg-4">
                    <Testimotials src={src1} />
                  </div>
                  <div className="col-lg-4">
                    <Testimotials src={src2} />
                  </div>
                  <div className="col-lg-4">
                    <Testimotials src={src3} />
                  </div>
                </div>
          </div>
        </section>
        {/* the team section */}
         <Team/>
       <Contact/>
      </main>

      <Footer/>
    </>
  );
};

export default Home;
