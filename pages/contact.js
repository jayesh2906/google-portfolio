import TitleDesc from "../components/TitleDesc";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactContainer,
  NameEmail,
  SubmitButton,
} from "../styles/Contact.styled";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tuxva2l",
        "template_xos6rpj",
        form.current,
        "KpFpu5QHkapktwXMv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <TitleDesc title="Contact Jayesh" desc="Here you can contact Jayesh." />
      <ContactContainer>
        <form ref={form} onSubmit={sendEmail}>
          <NameEmail>
            <div>
              <label>Name *</label>
              <input
                type="text"
                placeholder="Your name..."
                required
                name="name"
              />
            </div>
            <div>
              <label>Email *</label>
              <input
                type="email"
                placeholder="Your email..."
                required
                name="email"
              />
            </div>
          </NameEmail>
          <div>
            <label>Subject *</label>
            <input
              type="text"
              placeholder="Subject..."
              required
              name="subject"
            />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <label>Message *</label>
            <textarea required placeholder="Message..." name="message" />
          </div>
          <SubmitButton type="submit">
            Send Mail
            <AiOutlineSend size={18} />
          </SubmitButton>
        </form>
      </ContactContainer>
    </div>
  );
};
export default Contact;
