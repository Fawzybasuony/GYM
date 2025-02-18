import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const programs = [
    {
      title: "Basic Fitness",
      description:
        "Start your fitness journey with our Basic Fitness program, offering essential workouts to build a strong foundation.",
      image: "/img/features-first-icon.png",
    },
    {
      title: "New Gym Training",
      description:
        "Elevate your fitness with our New Gym Training program, featuring the latest techniques and equipment for optimal results.",
      image: "/img/features-first-icon.png",
    },
    {
      title: "Basic Muscle Course",
      description:
        "Build strength and muscle with our Basic Muscle Course, designed for all fitness levels to achieve noticeable gains.",
      image: "/img/features-first-icon.png",
    },
    {
      title: "Advanced Muscle Course",
      description:
        "Take your training to the next level with our Advanced Muscle Course, perfect for those seeking intense workouts.",
      image: "/img/features-first-icon.png",
    },
    {
      title: "Yoga Training",
      description:
        "Enhance your flexibility and mental clarity with our Yoga Training sessions, suitable for all experience levels.",
      image: "/img/features-first-icon.png",
    },
    {
      title: "Body Building Course",
      description:
        "Achieve your body building goals with our comprehensive course, focusing on strength, size, and symmetry.",
      image: "/img/features-first-icon.png",
    },
  ];

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

            {/** 🏋️‍♂️ توزيع البرامج على عمودين */}
            {Array.from({ length: 2 }, (_, colIndex) => (
              <div className="col-lg-6" key={colIndex}>
                <ul className="features-items">
                  {programs
                    .slice(colIndex * 3, colIndex * 3 + 3)   
                    .map((program, index) => (
                      <li className="feature-item" key={index}>
                        <div data-aos="zoom-out">
                          <div className="left-icon">
                            <img src={program.image} alt={program.title} />
                          </div>
                          <div className="right-content">
                            <h4>{program.title}</h4>
                            <p>{program.description}</p>
                            <Link to="#" className="text-button">
                              Discover More
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Call to Action Section ===== */}
      <section
        className="section h-50 mb-5"
        id="call-to-action"
        style={{ position: "relative", textAlign: "center", color: "#fff" }}
      >
        <img src="/img/cta-bg.jpg" alt="Background" />
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
