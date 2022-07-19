import TitleDesc from "../components/TitleDesc";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactContainer,
  NameEmail,
  ResultWrapper,
  SubmitButton,
  SubmitWrapper,
} from "../styles/Contact.styled";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const [showResult, SetShowResult] = useState(false);
  const [error, SetError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          SetShowResult(true);
        },
        (error) => {
          console.log(error);
          SetError(true);
          SetShowResult(true);
        }
      );
    e.target.reset();
  };

  setTimeout(() => {
    SetShowResult(false);
  }, 6000);

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
          <SubmitWrapper>
            <SubmitButton type="submit">
              Send Message
              <AiOutlineSend size={18} />
            </SubmitButton>
            <ResultWrapper error={error} showResult={showResult}>
              {error
                ? "Your message could not be sent, Kindly contact directly over Email or Phone!"
                : "Your message has been sent successfully, I will contact you soon!"}
            </ResultWrapper>
          </SubmitWrapper>
        </form>
      </ContactContainer>
    </div>
  );
};
export default Contact;
