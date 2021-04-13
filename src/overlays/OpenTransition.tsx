import React from 'react';
import Transition, { TransitionProps } from 'react-transition-group/Transition';

const OPEN_STATES = {
  entering: false,
  entered: true,
};

export type OpenTransitionProps = Omit<TransitionProps, 'addEndListener'>;

export function OpenTransition(props: OpenTransitionProps) {
  return (
    <Transition timeout={{ enter: 0, exit: 350 }} {...props}>
      {(state) =>
        React.Children.map(
          props.children,
          (child) =>
            // @ts-ignore
            child && React.cloneElement(child, { isOpen: !!OPEN_STATES[state] })
        )
      }
    </Transition>
  );
}
