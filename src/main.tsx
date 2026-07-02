if (typeof Node !== 'undefined' && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child && child.parentNode !== this) {
      return child;
    }
    return originalRemoveChild.call(this, child) as T;
  };
}

// Suppress known Chrome extension errors from cluttering the console
if (typeof window !== 'undefined') {
  const isExtensionError = (msg: string): boolean =>
    typeof msg === 'string' &&
    (msg.includes('A listener indicated an asynchronous response') ||
     msg.includes('message channel closed before a response was received'));

  window.addEventListener('unhandledrejection', (event) => {
    const msg = event.reason?.message || String(event.reason);
    if (isExtensionError(msg)) {
      event.preventDefault();
    }
  });

  window.addEventListener('error', (event) => {
    if (isExtensionError(event.message)) {
      event.preventDefault();
    }
  }, true);
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
