const handleOnTouchMoveFromRef = (el: HTMLDivElement) => {
  if (!el) {
    return;
  }

  const handleOnToucheMove = (e: TouchEvent) => {
    e.preventDefault();
  };

  el.addEventListener('touchmove', handleOnToucheMove, { passive: false });

  return () => el.removeEventListener('touchmove', handleOnToucheMove);
};

const useBlockScroll = () => {
  return {
    blockScrollOnRef: (el: HTMLDivElement) => handleOnTouchMoveFromRef(el),
  };
};

export { useBlockScroll };
