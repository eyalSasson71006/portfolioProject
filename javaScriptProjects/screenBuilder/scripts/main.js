import {initializeElements } from './localStorage.js';
import { setupEventListeners } from './eventHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    setupEventListeners();
});
