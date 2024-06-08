import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import App from './App';
import { BrowserRouter } from 'react-router-dom';

function Aboutme() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      offset: 200
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
