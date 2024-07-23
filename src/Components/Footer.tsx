import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm('service_a6axb0b', 'template_i5nph4j', form.current, 'uQbOY4o5E9hsSzxAL')
        .then((result) => {
          alert('Sent');
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className='footer'>
      <h2>Contact</h2>
      <div className='form-container'>
        <form className='formulario' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className='button' />
        </form>
      </div>
      <div className="socials">
        <a href='https://www.linkedin.com/in/franco-d-agostino-41b23b278/'>
          <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#631a1a",}} />
        </a>
        <a href='https://github.com/FrancoDagostin'>
          <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#631a1a",}} />
        </a>
      </div>
    </div>
  );
};

export default Footer;