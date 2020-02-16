import * as React from 'react';

type Effect = (callback: React.EffectCallback, deps: any[]) => void;

const noop = () => {};

const mockMediaQueryList: MediaQueryList = {
  media: '',
  matches: false,
  onchange: noop,
  addListener: noop,
  removeListener: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: (_: Event) => true,
};

const createUseMedia = (effect: Effect) => (query: string, defaultState = false) => {
  const [state, setState] = React.useState(defaultState);

  effect(() => {
    let mounted = true;
    const mediaQueryList: MediaQueryList =
      typeof window === 'undefined' ? mockMediaQueryList : window.matchMedia(query);

    const onChange = () => {
      if (mounted) {
        setState(Boolean(mediaQueryList.matches));
      }
    };

    mediaQueryList.addListener(onChange);
    setState(mediaQueryList.matches);

    return () => {
      mounted = false;
      mediaQueryList.removeListener(onChange);
    };
  }, [query]);

  return state;
};

export const useMedia = createUseMedia(React.useEffect);
export const useMediaLayout = createUseMedia(React.useLayoutEffect);

export default useMedia;
