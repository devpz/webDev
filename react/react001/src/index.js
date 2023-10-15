import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/footer/Footer';
import Heading from './components/heading/Heading';
import reportWebVitals from './reportWebVitals';

const contact = {
  email: "mail@example.com",
  adress: "Warsaw"
};

const companyData = {
  email: "company@example.com",
  city: "Warsaw"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Heading headerTitle="Welcome on page"/>
    <App />
    <Footer contact={contact} companyData={companyData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
