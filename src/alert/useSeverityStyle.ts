import { SeverityLevel } from '../types';
import { warningCSS, infoCSS, dangerCSS, successCSS } from './styles';

export function useSeverityStyle(severity: SeverityLevel) {
  let style;
  switch (severity) {
    case 'warning':
      style = warningCSS;
      break;
    case 'info':
      style = infoCSS;
      break;
    case 'danger':
      style = dangerCSS;
      break;
    case 'success':
      style = successCSS;
      break;
  }
  return style;
}
