import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '34em',
  md: '48em',
  lg: '72em',
  xl: '90em',
});

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  config
});

export default theme;
