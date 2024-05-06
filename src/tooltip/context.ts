import { CSSProperties } from 'react';
import React, { HTMLAttributes, RefObject } from 'react';
import { TooltipTriggerState } from '@react-stately/tooltip';
import { PlacementAxis } from '../types';

interface TooltipContextProps {
  state?: TooltipTriggerState;
  ref?: RefObject<HTMLDivElement>;
  placement?: PlacementAxis;
  arrowProps?: HTMLAttributes<HTMLElement>;
  style?: CSSProperties;
}

export const TooltipContext = React.createContext<TooltipContextProps>({});
