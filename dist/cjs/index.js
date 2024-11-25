'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Button = ({ content }) => {
    return (jsxRuntime.jsx("button", { className: "rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600", children: content }));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
