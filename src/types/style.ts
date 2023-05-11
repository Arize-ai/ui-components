import { DimensionValue } from './core';

export interface StyleProps {
  /** Sets the CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. Only use as a **last resort**. **/
  className?: string;

  /** The width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/width). */
  width?: DimensionValue;
  /** The height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/height). */
  height?: string | number;
  /** The minimum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width). */
  minWidth?: string | number;
  /** The minimum height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height). */
  minHeight?: string | number;
  /** The maximum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width). */
  maxWidth?: string | number;
  /** The maximum height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height). */
  maxHeight?: string | number;
}

// These support more properties than specific arize components
// but still based on arize global/alias variables.
export interface ViewStyleProps extends StyleProps {
  /** The background color for the element. */
  backgroundColor?: Responsive<BackgroundColorValue>;

  /** The width of the element's border on all four sides. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width). */
  borderWidth?: Responsive<BorderSizeValue>;
  /** The width of the border on the logical start side, depending on the layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width). */
  borderStartWidth?: Responsive<BorderSizeValue>;
  /** The width of the border on the logical end side, depending on the layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width). */
  borderEndWidth?: Responsive<BorderSizeValue>;
  // borderLeftWidth?: BorderSizeValue,
  // borderRightWidth?: BorderSizeValue,
  /** The width of the top border. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width). */
  borderTopWidth?: Responsive<BorderSizeValue>;
  /** The width of the bottom border. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width). */
  borderBottomWidth?: Responsive<BorderSizeValue>;
  /** The width of the left and right borders. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width). */
  borderXWidth?: Responsive<BorderSizeValue>;
  /** The width of the top and bottom borders. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width). */
  borderYWidth?: Responsive<BorderSizeValue>;

  /** The color of the element's border on all four sides. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color). */
  borderColor?: Responsive<BorderColorValue>;
  /** The color of the border on the logical start side, depending on the layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color). */
  borderStartColor?: Responsive<BorderColorValue>;
  /** The color of the border on the logical end side, depending on the layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color). */
  borderEndColor?: Responsive<BorderColorValue>;
  // borderLeftColor?: BorderColorValue,
  // borderRightColor?: BorderColorValue,
  /** The color of the top border. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color). */
  borderTopColor?: Responsive<BorderColorValue>;
  /** The color of the bottom border. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color). */
  borderBottomColor?: Responsive<BorderColorValue>;
  /** The color of the left and right borders. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color). */
  borderXColor?: Responsive<BorderColorValue>;
  /** The color of the top and bottom borders. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width). */
  borderYColor?: Responsive<BorderColorValue>;

  /** The border radius on all four sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius). */
  borderRadius?: Responsive<BorderRadiusValue>;
  /** The border radius for the top start corner of the element, depending on the layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius). */
  borderTopStartRadius?: Responsive<BorderRadiusValue>;
  /** The border radius for the top end corner of the element, depending on the layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius). */
  borderTopEndRadius?: Responsive<BorderRadiusValue>;
  /** The border radius for the bottom start corner of the element, depending on the layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius). */
  borderBottomStartRadius?: Responsive<BorderRadiusValue>;
  /** The border radius for the bottom end corner of the element, depending on the layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius). */
  borderBottomEndRadius?: Responsive<BorderRadiusValue>;
  // borderTopLeftRadius?: BorderRadiusValue,
  // borderTopRightRadius?: BorderRadiusValue,
  // borderBottomLeftRadius?: BorderRadiusValue,
  // borderBottomRightRadius?: BorderRadiusValue,

  /** The padding for all four sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding). */
  padding?: Responsive<DimensionValue>;
  /** The padding for the logical start side of the element, depending on layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start). */
  paddingStart?: Responsive<DimensionValue>;
  /** The padding for the logical end side of an element, depending on layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end). */
  paddingEnd?: Responsive<DimensionValue>;
  // paddingLeft?: Responsive<DimensionValue>,
  // paddingRight?: Responsive<DimensionValue>,
  /** The padding for the top side of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top). */
  paddingTop?: Responsive<DimensionValue>;
  /** The padding for the bottom side of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom). */
  paddingBottom?: Responsive<DimensionValue>;
  /** The padding for both the left and right sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding). */
  paddingX?: Responsive<DimensionValue>;
  /** The padding for both the top and bottom sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding). */
  paddingY?: Responsive<DimensionValue>;

  /** Species what to do when the element's content is too long to fit its size. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow). */
  overflow?: Responsive<string>;
  // ...
  // shadows?
  // transforms?
}

export interface BoxAlignmentStyleProps {
  /**
   * The distribution of space around items along the main axis. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
   * @default 'stretch'
   */
  justifyContent?: Responsive<
    | 'start'
    | 'end'
    | 'center'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
  >;
  /**
   * The distribution of space around child items along the cross axis. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
   * @default 'start'
   */
  alignContent?: Responsive<
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
  >;
  /**
   * The alignment of children within their container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
   * @default 'stretch'
   */
  alignItems?: Responsive<
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
  >;
  /** The space to display between both rows and columns. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap). */
  gap?: Responsive<DimensionValue>;
  /** The space to display between columns. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap). */
  columnGap?: Responsive<DimensionValue>;
  /** The space to display between rows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap). */
  rowGap?: Responsive<DimensionValue>;
}

export type ResponsiveProp<T> = {
  base?: T;
  S?: T;
  M?: T;
  L?: T;
  [custom: string]: T | undefined;
};

export interface FlexStyleProps extends BoxAlignmentStyleProps, StyleProps {
  /**
   * The direction in which to layout children. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
   * @default 'row'
   */
  direction?: Responsive<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
  /**
   * Whether to wrap items onto multiple lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
   * @default false
   */
  wrap?: Responsive<boolean | 'wrap' | 'nowrap' | 'wrap-reverse'>;
}

export type Responsive<T> = T | ResponsiveProp<T>;
