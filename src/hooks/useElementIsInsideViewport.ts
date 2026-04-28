import throttle from 'lodash/throttle';
import { useState } from 'react';

type UseElementIsInsideViewportOptions = {
  offset?: number;
};

const handleOnScrollEnd =
  (el: HTMLElement, options?: UseElementIsInsideViewportOptions) =>
  (): boolean => {
    const { top } = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    return top + (options?.offset || 0) <= windowHeight;
  };

const useIsInViewport = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  let handler: (e: Event) => void;

  return {
    clear: () => {
      if (handler) {
        document.body.removeEventListener('scrollend', handler);
      }
    },
    isInViewport,
    trackIfInViewport: (
      el: HTMLElement,
      options?: UseElementIsInsideViewportOptions,
    ) => {
      // only applies to phones
      // 640 matches the `sm` breakpoint in tailwind
      if (window.innerWidth > 640) {
        return;
      }

      const handlerFn = handleOnScrollEnd(el, options);

      handler = throttle(() => {
        const isInViewport = handlerFn();
        setIsInViewport(isInViewport);
      }, 400);

      document.addEventListener('scroll', handler);
    },
  };
};

export { useIsInViewport };
