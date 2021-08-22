import React from "react";
import { Link } from "react-router-dom";
import MainStaffMember from "./MainStaffMember";
const Team = () => {
  const staff = ["dgee", "dfe", "dawer", "dgewt"];
  return (
    <>
      <section id="team" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-right">
            <h2>Team</h2>
            <h3 className="text-center ">Meet our hard working team members</h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {staff.map((s) => (
                  <MainStaffMember />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
