
const code = "  \n   ⚠️  Tailwind is not purging unused styles because no template paths have been provided.\n      If you have manually configured PurgeCSS outside of Tailwind or are deliberately not\n      removing unused styles, set `purge: false` in your Tailwind config file to silence\n      this warning.\n   \n      https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
