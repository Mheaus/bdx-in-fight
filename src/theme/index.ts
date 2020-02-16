import { DefaultTheme } from 'styled-components';

import breakpoints from './breakpoints';
import colors from './colors';
import shadows from './shadows';

interface Theme extends DefaultTheme {
  breakpoints: typeof breakpoints;
  colors: typeof colors;
  shadows: typeof shadows;
}

const theme: Theme = {
  breakpoints,
  colors,
  shadows,
};

export default theme;
