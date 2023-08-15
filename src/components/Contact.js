import React from 'react';

const Contact = ({ firstName, lastName, phone }) => {
  return (
    <div className="contact">
      <p>Ім'я: {firstName}</p>
      <p>Прізвище: {lastName}</p>
      <p>Телефон: {phone}</p>
    </div>
  );
};

export default Contact;