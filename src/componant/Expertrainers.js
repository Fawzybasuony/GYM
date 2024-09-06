import React from "react";

export default function Expertrainers() {
  return (
    <>
  <section className="section" id="trainers">
  <div className="container">
    <div className="col-lg-6 offset-lg-3">
      <div className="section-heading">
        <h2 data-aos="zoom-out">
          Expert <em>Trainers</em>
        </h2>
        <img src="/img/line-dec.png" alt=".." />
        <p>
          Meet our team of highly skilled trainers dedicated to helping you achieve your fitness goals. Each trainer brings a wealth of knowledge and experience.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-lg-6 ms-lg-5">
        <div className="trainer-item" data-aos="fade-left">
          <div className="image-thumb">
            <img src="/img/first-trainer.jpg" alt=".." />
          </div>

          <div className="down-content col-10">
            <span>Strength Trainer</span>
            <h4>Johnny Darling</h4>
            <p>
            Johnny Darling specializes in strength training and has helped numerous clients achieve their fitness goals through personalized training programs.
            </p>
            <ul className="social-icons">
              <li>
                <a href="/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
