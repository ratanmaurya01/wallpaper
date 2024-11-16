// src/analytics.js
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-FJTK13X448"; // Replace with your actual Tracking ID
ReactGA.initialize(TRACKING_ID);

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
};
