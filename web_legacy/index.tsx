
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

// Debug helper
window.onerror = function (msg, url, line, col, error) {
  const div = document.createElement('div');
  div.style.color = 'red';
  div.style.padding = '20px';
  div.style.background = 'white';
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.zIndex = '9999';
  div.innerText = 'Error: ' + msg + '\n' + (error ? error.stack : '');
  document.body.appendChild(div);
  return false;
};

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    console.log('Mounting App...');
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (e) {
    console.error('Render error:', e);
    document.body.innerHTML += '<div style="color:red;padding:20px;background:white;">Render Error: ' + e + '</div>';
  }
} else {
  document.body.innerHTML = '<div style="color:red">Root element not found</div>';
}
