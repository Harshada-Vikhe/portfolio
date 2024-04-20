import React from "react";
import './Contact.css'
import { contact } from "../../util/contact";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const { social } = contact;
  return (
    <section className="section contact center" id="contact">
      <h2 className="section_title">Contact</h2>
      <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
        <span type="button" className="btn btn-outline">
          Email Me
        </span>
      </a>
      <div className="center">
        {social.github && (
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link"
          ><FaGithub  size={25} className="ilink" /></a>
        )}

        {social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link"
          ><FaLinkedinIn size={25} className="ilink"/></a>
        )}
      </div>
    </section>
  );
};

export default Contact;
