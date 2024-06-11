import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Find the container element in the DOM
const container = document.getElementById('root');

// Create a root from the container
const root = createRoot(container);

// Render the application using the root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
