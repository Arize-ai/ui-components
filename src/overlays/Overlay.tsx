import React, { ReactNode, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { OpenTransition } from './OpenTransition';

export interface OverlayProps {
  children: ReactNode;
  isOpen?: boolean;
  container?: Element;
  isKeyboardDismissDisabled?: boolean;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
}

function Overlay(props: OverlayProps) {
  let {
    children,
    isOpen,
    container,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
  } = props;
  const [exited, setExited] = useState<boolean>(!isOpen);

  const handleEntered = useCallback(() => {
    setExited(false);
    if (onEntered) {
      onEntered();
    }
  }, [onEntered]);

  const handleExited = useCallback(() => {
    setExited(true);
    if (onExited) {
      onExited();
    }
  }, [onExited]);

  // Don't un-render the overlay while it's transitioning out.
  let mountOverlay = isOpen || !exited;
  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  const contents = (
    <OpenTransition
      in={isOpen}
      appear
      onExit={onExit}
      onExiting={onExiting}
      onExited={handleExited}
      onEnter={onEnter}
      onEntering={onEntering}
      onEntered={handleEntered}
    >
      {children}
    </OpenTransition>
  );

  return ReactDOM.createPortal(contents, container || document.body);
}

export { Overlay };
