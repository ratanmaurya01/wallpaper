import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Faker = () => {
  const [creditCards, setCreditCards] = useState([]);

  useEffect(() => {
    const fetchCreditCards = async () => {
      try {
        const response = await axios.get('https://fakerapi.it/api/v1/credit_cards?_quantity=2');
        setCreditCards(response.data.data);
        console.log('ffds', response)
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching credit cards:', error);
      }
    };

    fetchCreditCards();
  }, []);

  return (
    <div>
      <h1>Credit Cards</h1>
      <ul>
        {creditCards.map((card, index) => (
          <li key={index}>
            <p>Card Number: {card.number}</p>
            <p>Expiration Date: {card.expiration}</p>
            <p>Owner name : {card.owner}</p>
            <p>Card Type: {card.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faker;
