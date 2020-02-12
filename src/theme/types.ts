// import original module declarations
import 'styled-components'

import breakpoints from './breakpoints'
import colors from './colors'
import shadows from './shadows'

const theme = {
  breakpoints,
  colors,
  shadows
}

type Theme = typeof theme

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
}
