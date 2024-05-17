import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oknz63h', 'template_9g3tktp', form.current, {
        publicKey: '0hCKQ-ptFb8EIww7c',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <PageContainer>
      <AboutSection>
        <h1>Get In <span>Touch</span></h1>
      </AboutSection>
      <FormContainer>
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <label className="text-black">Name</label>
            <input type="text" name="user_name" className="text-gray-800" />
            <label className="text-black">Email</label>
            <input type="email" name="user_email" className="text-gray-800" />
            <label className="text-black">Message</label>
            <textarea name="message" className="text-gray-800" />
            <input type="submit" value="Send" className="bg-gradient-to-r from-pink-400 via-sky-800 to-purple-700 text-white mt-4 p-2 rounded cursor-pointer" />
          </form>
        </StyledContactForm>
      </FormContainer>
    </PageContainer>
  );
};

export default ContactUs;

// Styles
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh; // Ensures full viewport height
  width: 100vw; // Full viewport width
`;

const AboutSection = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    margin: 20px 0;
    span {
      color: #666;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -80px;
  padding: 100px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 50px;
  }
`;

const StyledContactForm = styled.div`
  width: 100%;
  max-width: 800px; // Max width for larger screens
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
    }
  }
`;
