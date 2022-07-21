import TitleDesc from "../components/TitleDesc";
import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactContainer,
  ContactDetails,
  ContactForm,
  ContactItem,
  NameEmail,
  ResultWrapper,
  Spinner,
  SubmitButton,
  SubmitWrapper,
} from "../styles/Contact.styled";
import { AiOutlineSend } from "react-icons/ai";
import { contactData, contactDetails } from "../constants/constants";
import { ThemeContext } from "./_app";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [showResult, SetShowResult] = useState(false);
  const [error, SetError] = useState(false);
  const [isLoading, SetIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    SetIsLoading(true);

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
          SetIsLoading(false);
        },
        (error) => {
          console.log(error);
          SetError(true);
          SetShowResult(true);
          SetIsLoading(false);
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
        <ContactDetails>
          {contactDetails.map(({ icon: Icon, type, value, href }) => {
            return (
              <ContactItem key={type} darkMode={darkMode}>
                <Icon size={24} />
                <p>{type}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer">
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </ContactItem>
            );
          })}
        </ContactDetails>
        <ContactForm darkMode={darkMode}>
          <form ref={form} onSubmit={sendEmail}>
            <NameEmail>
              <div>
                <label>{contactData.nameLabel}</label>
                <input
                  type="text"
                  placeholder="Your name..."
                  required
                  name="name"
                />
              </div>
              <div>
                <label>{contactData.emailLabel}</label>
                <input
                  type="email"
                  placeholder="Your email..."
                  required
                  name="email"
                />
              </div>
            </NameEmail>
            <div>
              <label>{contactData.subjectLabel}</label>
              <input
                type="text"
                placeholder="Subject..."
                required
                name="subject"
              />
            </div>
            <div style={{ marginTop: "2rem" }}>
              <label>{contactData.messageLabel}</label>
              <textarea required placeholder="Message..." name="message" />
            </div>
            <SubmitWrapper>
              <SubmitButton type="submit">
                {contactData.sendButton}
                <AiOutlineSend size={18} />
              </SubmitButton>
              {isLoading && <Spinner></Spinner>}
              <ResultWrapper error={error} showResult={showResult}>
                {error ? contactData.errorMessage : contactData.successMessage}
              </ResultWrapper>
            </SubmitWrapper>
          </form>
        </ContactForm>
      </ContactContainer>
    </div>
  );
};
export default Contact;
