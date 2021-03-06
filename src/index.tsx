import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.css';

const history = createBrowserHistory({ window });
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // semi design is buggy, turn off strict mode temporarily
    <React.StrictMode>
        <HistoryRouter history={history}>
            <App />
        </HistoryRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
