import { jsx } from 'react/jsx-runtime';

const Button = ({ content }) => {
    return (jsx("button", { className: "rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600", children: content }));
};

export { Button };
//# sourceMappingURL=index.js.map
