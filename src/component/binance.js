import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BinanceTicker = () => {
  const [tickerData, setTickerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api4.binance.com/api/v3/ticker/24hr');
        setTickerData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially
    fetchData();

    // Fetch data every second
    const interval = setInterval(fetchData, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Binance 24hr Ticker Data</h2>
      <ul>
        {tickerData.map((ticker, index) => (
          <li key={index}>
            {ticker.symbol}: {ticker.lastPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BinanceTicker;
