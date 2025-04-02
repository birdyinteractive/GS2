import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './9App.js';
import { SoundSystem } from './SoundSystem.js';
// Initialize sound system
SoundSystem.init();
// Initialize the DOM structure
document.body.innerHTML = '<div id="root"></div>';
// Add global styles
var styleSheet = "\n    * { \n        margin: 0; \n        padding: 0; \n        box-sizing: border-box;\n    }\n    html, body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        background: #000;\n    }\n    #root {\n        width: 100%;\n        height: 100%;\n        display: flex;\n    }\n";
var styleElement = document.createElement('style');
styleElement.textContent = styleSheet;
document.head.appendChild(styleElement);
// Initialize React
var root = createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
    fileName: "main.js",
    lineNumber: 33,
    columnNumber: 13
}, this));
