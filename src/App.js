import React from 'react';
import Contacts from './components/Contacts/Contacts.css';
import './App.css';

const contacts = [
  {
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
  }, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
  }, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666",
  }, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
  }, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
  }, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
  }
];

function App() {
  return (
    <div className="App">
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;