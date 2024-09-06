import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <section className="section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2 data-aos="zoom-in">
                  Choose <em>Program</em>
                </h2>
                <img src="/img/line-dec.png" alt="waves" />
                <p>
                  Explore our diverse range of programs designed to help you
                  achieve your fitness goals. Join us and transform your fitness
                  journey.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="features-items">
                <li className="feature-item">
                  <div data-aos="zoom-out">
                    <div className="left-icon">
                      <img
                        src="/img/features-first-icon.png"
                        alt="Basic Fitness"
                      />
                    </div>
                    <div className="right-content">
                      <h4>Basic Fitness</h4>
                      <p>
                        Start your fitness journey with our Basic Fitness
                        program, offering essential workouts to build a strong
                        foundation.
                      </p>
                      <Link to="#" className="text-button">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </li>
                <div data-aos="zoom-out">
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="/img/features-first-icon.png"
                        alt="New Gym Training"
                      />
                    </div>
                    <div className="right-content">
                      <h4>New Gym Training</h4>
                      <p>
                        Elevate your fitness with our New Gym Training program,
                        featuring the latest techniques and equipment for
                        optimal results.
                      </p>
                      <Link to="#" className="text-button">
                        Discover More
                      </Link>
                    </div>
                  </li>
                </div>

                <div data-aos="zoom-out">
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="/img/features-first-icon.png"
                        alt="Basic Muscle Course"
                      />
                    </div>
                    <div className="right-content">
                      <h4>Basic Muscle Course</h4>
                      <p>
                        Build strength and muscle with our Basic Muscle Course,
                        designed for all fitness levels to achieve noticeable
                        gains.
                      </p>
                      <Link to="#" className="text-button">
                        Discover More
                      </Link>
                    </div>
                  </li>
                </div>
              </ul>
            </div>

            <div className="col-lg-6">
              <ul className="features-items">
                <li className="feature-item">
                  <div data-aos="zoom-out">
                    <div className="left-icon">
                      <img
                        src="/img/features-first-icon.png"
                        alt="Advanced Muscle Course"
                      />
                    </div>

                    <div className="right-content">
                      <h4>Advanced Muscle Course</h4>
                      <p>
                        Take your training to the next level with our Advanced
                        Muscle Course, perfect for those seeking intense
                      </p>
                      <Link to="#" className="text-button">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="feature-item">
                  <div data-aos="zoom-out">
                    <div className="left-icon">
                      <img
                        src="/img/features-first-icon.png"
                        alt="Yoga Training"
                      />
                    </div>
                    <div className="right-content">
                      <h4>Yoga Training</h4>
                      <p>
                        Enhance your flexibility and mental clarity with our
                        Yoga Training sessions, suitable for all experience
                        levels.
                      </p>
                      <Link to="#" className="text-button">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="feature-item">
                  <div data-aos="zoom-out">
                    <div className="left-icon">
                      <img
                        src="/img/features-first-icon.png"
                        alt="Body Building Course"
                      />
                    </div>
                    <div className="right-content">
                      <h4>Body Building Course</h4>
                      <p>
                        Achieve your body building goals with our comprehensive
                        course, focusing on strength, size, and symmetry.
                      </p>
                      <Link to="#" className="text-button">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== */}

      <section
        className="section h-50 mb-5"
        id="call-to-action"
        style={{ position: "relative", textAlign: "center", color: "#fff" }}
      >
        <img
          src="/img/cta-bg.jpg"
          alt="Background"
          // style={{ width: "100%", height: "400px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            width: "90%",
          }}
        >
          <div className="cta-content">
            <h2>
              Don’t <em>think</em>, begin <em>today</em>!
            </h2>
            <p>
              Take the first step towards a healthier, happier you. Our programs
              are designed to help you achieve your fitness goals, whether
              you're just starting out or looking to take your training to the
              next level. Join us today and transform your life!
            </p>
          </div>

          <div className="main-button scroll-to-section">
            <a href="#our-classes ">Become a member</a>
          </div>
        </div>
      </section>
    </>
  );
}
