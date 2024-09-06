import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Clases() {
  const [activeTab, setActiveTab] = useState("tabs-1");
  return (
    <>
      <section className="section" id="our-classes">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading" >
                <h2 data-aos="zoom-out">
                  Our <em>Classes</em>
                </h2>
                <img src="/img/line-dec.png" alt=".." />
                <p>
                  Explore our variety of classes designed to meet all your
                  fitness needs. Whether you’re a beginner or a seasoned
                  athlete, we have something for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="tabs">
            <div className="col-lg-4">
              <ul>
                <li>
                  <Link data-aos="zoom-out" to="#" onClick={() => setActiveTab("tabs-1")}>
                    <img src="/img/tabs-first-icon.png " alt="..." />
                    Beginner Fitness Class
                  </Link>
                </li>
                <li>
                  <Link data-aos="zoom-out" to="#" onClick={() => setActiveTab("tabs-2")}>
                    <img src="/img/tabs-first-icon.png" alt="..." />
                    Intermediate Training
                  </Link>
                </li>
                <li>
                  <Link data-aos="zoom-out" to="#" onClick={() => setActiveTab("tabs-3")}>
                    <img src="/img/tabs-first-icon.png" alt="..." />
                    Advanced Training
                  </Link>
                </li>
                <li>
                  <Link data-aos="zoom-out" to="#" onClick={() => setActiveTab("tabs-4")}>
                    <img src="/img/tabs-first-icon.png" alt="..." />
                    Expert Training Class
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <section className="tabs-content">
                {activeTab === "tabs-1" && (
                  <article id="tabs-1">
                    <img src="/img/training-image-01.jpg" alt="First Class" />
                    <h4>Beginner Fitness Class</h4>
                    <p>
                      Start your fitness journey with our beginner-friendly
                      classes. These sessions focus on building a solid
                      foundation and improving overall health and fitness.
                    </p>
                    <div className="main-button">
                      <Link to="#">View Schedule</Link>
                    </div>
                  </article>
                )}
                {activeTab === "tabs-2" && (
                  <article id="tabs-2">
                    <img
                      style={{ height: "250px", width: "100%" }}
                      src="/img/223141-تمرين كمال الاجسام للمبتدئين.jpg"
                      alt="Second Training"
                    />
                    <h4>Intermediate Training Class</h4>
                    <p>
                      Take your fitness to the next level with our intermediate
                      classes, designed to challenge you and help you progress
                      further in your fitness journey.
                    </p>
                    <div className="main-button">
                      <Link to="#">View Schedule</Link>
                    </div>
                  </article>
                )}
                {activeTab === "tabs-3" && (
                  <article id="tabs-3">
                    <img
                      style={{ height: "250px", width: "100%" }}
                      src="/img/564316435-480304-1535746937.jpg.webp"
                      alt="Third Class"
                    />
                    <h4>Advanced Training Class</h4>
                    <p>
                      Push your limits with our advanced classes, featuring
                      high-intensity workouts that will help you achieve peak
                      performance and fitness.
                    </p>
                    <div className="main-button">
                      <Link to="#">View Schedule</Link>
                    </div>
                  </article>
                )}
                {activeTab === "tabs-4" && (
                  <article id="tabs-4">
                    <img
                      style={{ height: "250px", width: "100%" }}
                      src="/img/60-194832-gym-most-important-rulse-5.jpeg"
                      alt="Fourth Training"
                    />
                    <h4>Expert Training Class</h4>
                    <p>
                      Join our expert training sessions for personalized
                      coaching and advanced techniques tailored to help you
                      reach your highest fitness goals.
                    </p>
                    <div className="main-button">
                      <Link to="#">View Schedule</Link>
                    </div>
                  </article>
                )}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
