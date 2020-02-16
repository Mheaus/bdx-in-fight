import 'styled-components';

import breakpoints from './breakpoints';
import colors from './colors';
import shadows from './shadows';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme {
    breakpoints: typeof breakpoints;
    colors: typeof colors;
    shadows: typeof shadows;
  }
}
