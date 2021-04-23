import { CSSProperties } from 'react';
import { PlacementAxis } from '../types';
import React, { HTMLAttributes, RefObject } from 'react';
import { TooltipTriggerState } from '@react-stately/tooltip';

interface TooltipContextProps {
  state?: TooltipTriggerState;
  ref?: RefObject<HTMLDivElement>;
  placement?: PlacementAxis;
  arrowProps?: HTMLAttributes<HTMLElement>;
  style?: CSSProperties;
}

export const TooltipContext = React.createContext<TooltipContextProps>({});
