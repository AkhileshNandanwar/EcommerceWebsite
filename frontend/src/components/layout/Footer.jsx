import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container my-5">
      {/* Footer */}
      <footer className="footer text-center text-lg-start text-white">
        {/* Section: Social media */}
        <section className="social-media d-flex justify-content-between p-4">
          {/* Left */}
          <div className="left me-5 fw-bold">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div className="right">
            <a href="#" className="text-dark me-4">
              <FaFacebookF />
            </a>
            <a href="#" className="text-dark me-4">
              <FaTwitter />
            </a>
            <a href="#" className="text-dark me-4">
              <FaGoogle />
            </a>
            <a href="#" className="text-dark me-4">
              <FaInstagram />
            </a>
            <a href="#" className="text-dark me-4">
              <FaLinkedin />
            </a>
            <a href="#" className="text-dark me-4">
              <FaGithub />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section className="links-section">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 column">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 column">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#!" className="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a href="#!" className="text-white">MDWordPress</a>
                </p>
                <p>
                  <a href="#!" className="text-white">BrandFlow</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Bootstrap Angular</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 column">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#!" className="text-white">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Help</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p><FaHome className="icon" /> New York, NY 10012, US</p>
                <p><FaEnvelope className="icon" /> info@example.com</p>
                <p><FaPhone className="icon" /> + 01 234 567 88</p>
                <p><FaPrint className="icon" /> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className="copyright text-center p-3">
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;
