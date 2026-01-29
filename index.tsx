
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 確保在 DOM 載入後才執行掛載
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("找不到 root 節點，請檢查 index.html");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
