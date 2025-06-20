
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './css/reset.css';
import './css/style.css';
import reportWebVitals from './reportWebVitals';
import Index from './components/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
