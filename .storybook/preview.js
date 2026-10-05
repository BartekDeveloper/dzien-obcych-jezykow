import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    a11y: { test: 'todo' },
  },
};
export default preview;
