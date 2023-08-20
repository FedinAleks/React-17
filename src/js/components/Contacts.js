import React, { useState } from 'react';
import Contact from './js/components/Contact.js';
import './css/components/Contacts.css';

const Contacts = ({ contacts }) => {
  const [selectedContactIndex, setSelectedContactIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMale, setShowMale] = useState(true);
  const [showFemale, setShowFemale] = useState(true);

  const handleContactClick = (index) => {
    setSelectedContactIndex(index);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      (showMale && contact.gender === 'male') ||
      (showFemale && contact.gender === 'female')
  ).filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  return (
    <div className="contacts-list">
      <h2>Список контактів</h2>
      <div className="search-bar">
        <input className="searcher"
          type="text"
          placeholder="Пошук за ім'ям, прізвищем або номером"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="filter-options">
        <label>
          <input className="checkbox"
            type="checkbox"
            checked={showMale}
            onChange={() => setShowMale(!showMale)}
          />
          Чоловік
        </label>
        <label>
          <input className="checkbox"
            type="checkbox"
            checked={showFemale}
            onChange={() => setShowFemale(!showFemale)}
          />
          Жінка
        </label>
      </div>
      <div className="contacts">
        {filteredContacts.map((contact, index) => (
          <div
            key={index}
            className={`contact-item ${selectedContactIndex === index ? 'selected' : ''}`}
            onClick={() => handleContactClick(index)}
          >
            <span className={`gender-icon ${contact.gender === 'male' ? 'male' : 'female'}`}>
              {contact.gender === 'male' ? 'Чоловік' : 'Жінка'}
            </span>
            <Contact {...contact} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;