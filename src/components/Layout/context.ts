import * as React from 'react';

interface LayoutContext {
  media: {
    isMobile: boolean;
    isSmall: boolean;
    isMedium: boolean;
    isLarge: boolean;
  };
}

const LayoutContext = React.createContext<LayoutContext>({});

export const LayoutContextProvider = LayoutContext.Provider;

export default LayoutContext;
