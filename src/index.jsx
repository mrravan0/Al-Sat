import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './Main-Component/App';
import './Scss-Sass/Constructors/_normalize.scss';
import './Scss-Sass/Constructors/_fonts.scss';
import './Scss-Sass/Constructors/_variables.scss';
import './Scss-Sass/Constructors/_utils.scss';
import './Scss-Sass/Constructors/_global.scss';
import { BrowserRouter } from 'react-router-dom';
const HomeWork = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(HomeWork());
reportWebVitals();
