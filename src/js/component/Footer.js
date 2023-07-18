import React from "react";

const Footer = () => {
  return (
    <>
        <footer className="bg-dark text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-1">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.linkedin.com/in/yahaira-calvo-m-504861211/"
                type="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://github.com/Yahaira326"
                type="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>
          <div className="text-center p-3 fw-light">
            Made by Yahaira Calvo 
          </div>
        </footer>
    </>
  );
};

export default Footer;