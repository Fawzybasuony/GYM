const trainers = [
  {
    id: 1,
    name: "Johnny Darling",
    role: "Strength Trainer",
    image: "/img/first-trainer.jpg",
    description:
      "Johnny Darling specializes in strength training and has helped numerous clients achieve their fitness goals through personalized training programs.",
    socialLinks: {
      facebook: "/",
      twitter: "/",
      linkedin: "/",
      instagram: "/",
    },
  },
  {
    id: 2,
    name: "Sarah Connor",
    role: "Cardio Trainer",
    image: "/img/second-trainer.jpg",
    description:
      "Sarah Connor is a certified cardio trainer who ensures her clients achieve peak endurance and fitness through specialized cardio workouts.",
    socialLinks: {
      facebook: "/",
      twitter: "/",
      linkedin: "/",
      instagram: "/",
    },
  },
];

function TrainersSection() {
  return (
    <section className="section" id="trainers">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2 data-aos="zoom-out">
                Expert <em>Trainers</em>
              </h2>
              <img src="/img/line-dec.png" alt=".." />
              <p>
                Meet our team of highly skilled trainers dedicated to helping you achieve your fitness goals.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {trainers.map((trainer) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={trainer.id}>
              <div className="trainer-item w-100" data-aos="fade-up">
                <div className="image-thumb">
                  <img src={trainer.image} alt={trainer.name} className="img-fluid" />
                </div>

                <div className="down-content ">
                  <span>{trainer.role}</span>
                  <h4>{trainer.name}</h4>
                  <p>{trainer.description}</p>
                  <ul className="social-icons d-flex justify-content-center gap-3">
                    <li>
                      <a href={trainer.socialLinks.facebook}>
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={trainer.socialLinks.twitter}>
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={trainer.socialLinks.linkedin}>
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href={trainer.socialLinks.instagram}>
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainersSection;
