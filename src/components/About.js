import React from "react";
// import './About.css';

const About = () => {
  return (
    <div className="container mt-4 pt-4">
      <h1 className="text-center">About Me</h1>
      <div className="row mt-4">
        <div className="col-lg-8">
          <div className="row mt-3">
            <div className="col-md-6">
              <ul>
                <li>Name: Shruti</li>
                <li>Age: 19</li>
                <li>State: Haryana</li>
                <li>College:IIT (BHU), Varanasi</li>
                <li>Branch: Electrical</li>
                <li>Sem: 5th</li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <p>
              {" "}
              I have actively contributed to various aspects in college. As a
              member of the design team for Prastuti'23, I played a role in
              making design for posts, invitation card etc. In addition to my
              involvement in Prastuti, I dedicated my time and energy to the
              Cine Club until December 2023, where I engaged in the exploration
              of scripting and shooting. As an active participant, I competed in
              various competitions and also won 3rd position in first cut ,
              short film making competition. Beyond extracurricular activities,
              I have been deeply engaged in sports and physical fitness
              initiatives on campus. As a member of the kabaddi team and the
              coordinator for kabaddi events during Spardha'23, the sports fest,
              I demonstrated my leadership skills and commitment to promoting
              sportsmanship and camaraderie among peers. Moreover, I have
              actively contributed to the college community through my
              participation in coverage during festivals and my involvement in
              community service projects. Whether it was volunteering for social
              causes or collaborating with local organizations, I have
              consistently sought to make a positive impact beyond the confines
              of the campus. Looking ahead, I am committed to continuing my
              contributions to the college community and fostering a culture of
              excellence, inclusivity, and collaboration. I aspire to leverage
              my experiences and skills to inspire others and drive positive
              change, both within the college and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
