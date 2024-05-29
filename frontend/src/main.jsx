import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContext } from './store/AuthContext.jsx';
import { UserContext } from './store/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext.Provider value={{ isAuthorized: false }}>
      <UserContext.Provider value={{}}>
        <App />
      </UserContext.Provider>
    </AuthContext.Provider>
  </React.StrictMode>,
);
