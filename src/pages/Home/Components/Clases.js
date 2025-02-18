import React, { useState } from "react";
import { Link } from "react-router-dom";

const classesData = [
  {
    id: "tabs-1",
    title: "Beginner Fitness Class",
    description:
      "Start your fitness journey with our beginner-friendly classes. These sessions focus on building a solid foundation and improving overall health and fitness.",
    image: "/img/training-image-01.jpg",
  },
  {
    id: "tabs-2",
    title: "Intermediate Training Class",
    description:
      "Take your fitness to the next level with our intermediate classes, designed to challenge you and help you progress further in your fitness journey.",
    image: "/img/223141-تمرين كمال الاجسام للمبتدئين.jpg",
  },
  {
    id: "tabs-3",
    title: "Advanced Training Class",
    description:
      "Push your limits with our advanced classes, featuring high-intensity workouts that will help you achieve peak performance and fitness.",
    image: "/img/564316435-480304-1535746937.jpg.webp",
  },
  {
    id: "tabs-4",
    title: "Expert Training Class",
    description:
      "Join our expert training sessions for personalized coaching and advanced techniques tailored to help you reach your highest fitness goals.",
    image: "/img/60-194832-gym-most-important-rulse-5.jpeg",
  },
];

export default function Classes() {
  const [activeTab, setActiveTab] = useState("tabs-1");

  return (
    <section className="section" id="our-classes">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2 data-aos="zoom-out">
                Our <em>Classes</em>
              </h2>
              <img src="/img/line-dec.png" alt=".." />
              <p>
                Explore our variety of classes designed to meet all your fitness
                needs. Whether you’re a beginner or a seasoned athlete, we have
                something for everyone.
              </p>
            </div>
          </div>
        </div>

        <div className="row" id="tabs">
          <div className="col-lg-4">
            <ul>
              {classesData.map((cls) => (
                <li key={cls.id}>
                  <Link data-aos="zoom-out" to="#" onClick={() => setActiveTab(cls.id)}>
                    <img src="/img/tabs-first-icon.png" alt={cls.title} />
                    {cls.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-8">
            <section className="tabs-content">
              {classesData.map((cls) =>
                activeTab === cls.id ? (
                  <article key={cls.id} id={cls.id}>
                    <img
                      style={{ height: "250px", width: "100%" }}
                      src={cls.image}
                      alt={cls.title}
                    />
                    <h4>{cls.title}</h4>
                    <p>{cls.description}</p>
                    <div className="main-button">
                      <Link to="#">View Schedule</Link>
                    </div>
                  </article>
                ) : null
              )}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
