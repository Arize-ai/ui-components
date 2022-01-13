import React from 'react';
import {
  Icon,
  InfoOutline,
  InfoFilled,
  AlertTriangleOutline,
  AlertTriangleFilled,
  AlertCircleOutline,
  AlertCircleFilled,
  CheckmarkCircleOutline,
  CheckmarkCircleFilled,
} from '../icon';
import { SeverityLevel } from '../types';

type IconOptions = {
  /**
   * Whether or not the icon should be filled-in or outlined
   * @default true
   */
  filled?: boolean;
};
export function useSeverityIcon(
  severity: SeverityLevel,
  { filled }: IconOptions = { filled: true }
) {
  let svg;
  switch (severity) {
    case 'warning':
      svg = filled ? <AlertTriangleFilled /> : <AlertTriangleOutline />;
      break;
    case 'info':
      svg = filled ? <InfoFilled /> : <InfoOutline />;
      break;
    case 'danger':
      svg = filled ? <AlertCircleFilled /> : <AlertCircleOutline />;
      break;
    case 'success':
      svg = filled ? <CheckmarkCircleFilled /> : <CheckmarkCircleOutline />;
      break;
  }
  return <Icon svg={svg} />;
}
