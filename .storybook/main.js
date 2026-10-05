import tailwindcss from '@tailwindcss/vite';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.jsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: { name: '@storybook/react-vite', options: {} },
  async viteFinal(cfg) {
    cfg.plugins = [...(cfg.plugins || []), tailwindcss()];
    return cfg;
  },
};
export default config;
