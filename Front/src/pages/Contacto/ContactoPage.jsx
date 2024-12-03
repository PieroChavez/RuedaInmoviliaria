// src/pages/ContactPage.jsx
import React from "react";
import "./ContactoPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="main">
        

        <div className="content">
          <h1>
            Web Design & <br />
            <span>Development</span> <br />
            Course
          </h1>
          <p className="par">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
            expedita atque eveniet <br /> quis nesciunt. Quos nulla vero
            consequuntur, fugit nemo ad delectus <br /> a quae totam ipsa illum
            minus laudantium?
          </p>

          <button className="cn">
            <a href="#">JOIN US</a>
          </button>

          <div className="form">
            <h2>Login Here</h2>
            <input type="email" placeholder="Enter Email Here" />
            <input type="password" placeholder="Enter Password Here" />
            <button className="btnn">
              <a href="#">Login</a>
            </button>

            <p className="link">
              Don't have an account<br />
              <a href="#">Sign up</a> here
            </p>
            <p className="liw">Log in with</p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
