
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

// Debug helper - Mobile Console
const debugDiv = document.createElement('div');
debugDiv.id = 'debug-console';
debugDiv.style.cssText = 'display:none;position:fixed;bottom:0;left:0;right:0;height:30vh;background:rgba(0,0,0,0.85);color:#0f0;overflow-y:auto;z-index:99999;font-family:monospace;padding:8px;font-size:12px;pointer-events:none;';
document.body.appendChild(debugDiv);

const logToScreen = (type: string, args: any[]) => {
  // Only show if there's an error or strictly requested, or always show for now to debug
  debugDiv.style.display = 'block';
  const line = document.createElement('div');
  line.style.borderBottom = '1px solid #333';
  line.style.padding = '2px 0';
  const msg = args.map(a => {
    try {
      return typeof a === 'object' ? JSON.stringify(a) : String(a);
    } catch (e) { return String(a); }
  }).join(' ');
  line.textContent = `[${type}] ${msg}`;
  if (type === 'ERROR') line.style.color = '#ff6b6b';
  debugDiv.appendChild(line);
  debugDiv.scrollTop = debugDiv.scrollHeight;
};

const originalLog = console.log;
const originalError = console.error;

console.log = (...args) => {
  originalLog(...args);
  logToScreen('LOG', args);
};

console.error = (...args) => {
  originalError(...args);
  logToScreen('ERROR', args);
};

window.onerror = function (msg, url, line, col, error) {
  logToScreen('ERROR', [`Global Error: ${msg}`, `Line: ${line}`, error?.stack]);
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
