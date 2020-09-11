import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#39485e',
  colorSecondary: '#01c4bd',

  // UI
  appBg: 'white',
  appContentBg: '#f5f6f7',
  appBorderColor: '#d3d7dd',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#39485e',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#01c4bd',
  barBg: '#39485e',

  // Form colors
  inputBg: 'white',
  inputBorder: '#d3d7dd',
  inputTextColor: '#39485e',
  inputBorderRadius: 4,

  brandTitle: 'Storybook Younited',
  brandUrl: 'https://www.younited-credit.com/',
  brandImage: 'https://www.younited-credit.com/media/1213/logo.svg'
});