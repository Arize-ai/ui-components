import { DimensionValue } from './core';

export interface StyleProps {
  /** Sets the CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. Only use as a **last resort**. **/
  className?: string;

  /** The width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/width). */
  width?: DimensionValue;
  /** The height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/height). */
  height?: number;
  /** The minimum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width). */
  minWidth?: string | number;
  /** The minimum height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height). */
  minHeight?: string | number;
  /** The maximum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width). */
  maxWidth?: string | number;
  /** The maximum height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height). */
  maxHeight?: string | number;
}

export type ResponsiveProp<T> = {
  base?: T;
  S?: T;
  M?: T;
  L?: T;
  [custom: string]: T | undefined;
};

export type Responsive<T> = T | ResponsiveProp<T>;
