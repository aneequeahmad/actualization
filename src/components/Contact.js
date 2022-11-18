import React, { useRef } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9mhut5g', 'template_p1v5woe', form.current, 'gxsSncUmO8cvM14am')
      .then((result) => {
        alert(result.text === 'OK' && 'Email Sent Successfully')
        form.current.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <div className="animate_animated animate_fadeIn">
        <h1>Contact Us</h1>
        <p>Lorem Ipsum is simply dummy text typesetting industry.</p>
        <div className="formMain">
          <div className="row">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" name='firstname' className="form-control" />
                </div>
                <div className="col-lg-6">
                  <input type="email" placeholder="Email" name='email' className="form-control" />
                </div>
              </div>
              <div className="col-lg-12">
                <input type="text" placeholder="Subject" name='subject' className="form-control" />
              </div>
              <div className="col-lg-12">
                <textarea placeholder="Message" name="messsage" className="form-control" />
              </div>
              <div className="col-lg-12">
                <button type='submit' className="btn btn_submit">Send Message</button>
              </div>
            </form>
            );
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;