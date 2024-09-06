import React from "react";
import   "./foter.css";

export default function Footer() {
  return (
    <>
      {/* <section id="contact">
        <div id="con" className="container">
          <div className="contact-content row mx-0">
            <div className="contact-info col-12 ">
              <div>
                <h3>contact</h3>
                <p>
                  <i className="fa-solid fa-location-dot" /> Kafr El-Sheikh
                  Egypt
                </p>
                <p>
                  <i className="fa-solid fa-phone" /> Phone: 01060618915
                </p>
                <p>
                  <i className="fa-regular fa-envelope" /> support@fastfood.com
                </p>
              </div>
              <div>
                <h3>work hours</h3>
                <p>8:00 am to 11:00 pm</p>
                <p>11:00 am to 1:00 Am</p>
                <p>Closed on Friday</p>
              </div>
              <div>
                <h3>FOLLOW US</h3>
                <a href="/">
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="/">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="/">
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
 <div>
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <a href="/"><img src="/img/logooo.jpg" alt='.' className="img-fluid logo-footer" /></a>
          <div className="footer-about">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="useful-link">
            <h2>Useful Links</h2>
            <div className="use-links">
              <li><a href="/"><i className="fa-solid fa-angles-right" /> Home</a></li>
              <li><a href="/"><i className="fa-solid fa-angles-right" /> About Us</a></li>
              <li><a href="/"><i className="fa-solid fa-angles-right" /> Gallery</a></li>
              <li><a href="/"><i className="fa-solid fa-angles-right" /> Contact</a></li>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="social-links">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <li><a href><i className="fa-brands fa-facebook-f" /> Facebook</a></li>
              <li><a href><i className="fa-brands fa-instagram" /> Instagram</a></li>
              <li><a href><i className="fa-brands fa-linkedin-in" /> Linkedin</a></li>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="address">
            <h2>Address</h2>
            <div className="address-links">
              <li className="address1"><i className="fa-solid fa-location-dot" /> Kolathur@gmail.com</li>
              <li><a href><i className="fa-solid fa-phone" /> +91 90904500112</a></li>
              <li><a href><i className="fa-solid fa-envelope" /> mail@1234567.com</a></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <section id="copy-right">
    <div className="copy-right-sec"><i className="fa-solid fa-copyright" />  
      lorem ispum lorem ispum 2022 Powerd By <a href="/">Fawzy Basuony</a> 
    </div>
  </section>
</div>

    </>
  );
}
