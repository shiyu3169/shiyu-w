import React from "react";
import InnerHeader from "../layout/InnerHeader";
import Info from "../contact/Info";

const Contact = () => {
  return (
    <>
      <InnerHeader current="contact" />
      <section id="contact-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="bottom-line" />
          <p className="lead">Here is how you can reach me</p>
          <form method="POST" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <div className="text-fields">
              <input
                type="text"
                className="text-input name-input"
                placeholder="Name"
                name="name"
              />
              <input
                type="text"
                className="text-input subject-input"
                placeholder="Suject"
                name="subject"
              />
              <input
                type="email"
                className="text-input email-input"
                placeholder="Email Address"
                name="email"
              />
              <input
                type="text"
                className="text-input phone-input"
                placeholder="Phone Number"
                name="phone"
              />
              <textarea
                className="text-input message-input"
                placeholder="Enter Message"
                name="message"
              />
              <div className="my-2">
                <div data-netlify-recaptcha="true" />
              </div>
            </div>
            <button type="submit" className="btn-dark">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section id="contact-b" className="py-3 bg-dark">
        <div className="contaienr">
          <div className="contact-info">
            <Info
              title="Email"
              content="shiyu3169@gmail.com"
              iconClasses="fas fa-envelope fa-2x"
            />
            <Info
              title="Phone"
              content="(857)-269-9341"
              iconClasses="fas fa-phone fa-2x"
            />
            <Info
              title="Address"
              content="394 Ocean Ave, Revere MA, 02151"
              iconClasses="fas fa-address-card fa-2x"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
