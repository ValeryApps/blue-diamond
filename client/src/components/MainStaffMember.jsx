import React from "react";
import { Link } from "react-router-dom";

const MainStaffMember = () => {
  return (
    <div className="col-lg-6 mt-3">
      <div className="member" data-aos="zoom-in" data-aos-delay="100">
        <div className="pic">
          <img src="assets/img/team/dg.jpg" className="img-fluid" alt="" />
        </div>
        <div className="member-info">
          <div className="team-title">
            <h4 className="text-white">Father Maroun Zogheib</h4>
            <span>Director</span>
          </div>

          <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
          <div className="social">
            <Link to="">
              <i className="ri-twitter-fill"></i>
            </Link>
            <Link to="">
              <i className="ri-facebook-fill"></i>
            </Link>
            <Link to="">
              <i className="ri-instagram-fill"></i>
            </Link>
            <Link to="">
              {" "}
              <i className="ri-linkedin-box-fill"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStaffMember;
