import { ReactElement } from 'react';

export type PopoverClose = (close: () => void) => ReactElement;
export type ModalClose = (close: () => void) => ReactElement;

export interface OverlayTriggerProps {
  /** Whether the overlay is open by default (controlled). */
  isOpen?: boolean;
  /** Whether the overlay is open by default (uncontrolled). */
  defaultOpen?: boolean;
  /** Handler that is called when the overlay's open state changes. */
  onOpenChange?: (isOpen: boolean) => void;
}

export type Placement =
  | 'bottom'
  | 'bottom left'
  | 'bottom right'
  | 'bottom start'
  | 'bottom end'
  | 'top'
  | 'top left'
  | 'top right'
  | 'top start'
  | 'top end'
  | 'left'
  | 'left top'
  | 'left bottom'
  | 'start'
  | 'start top'
  | 'start bottom'
  | 'right'
  | 'right top'
  | 'right bottom'
  | 'end'
  | 'end top'
  | 'end bottom';

export type Axis = 'top' | 'bottom' | 'left' | 'right';
export type PlacementAxis = Axis | 'center';

export interface PositionProps {
  /**
   * The placement of the element with respect to its anchor element.
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * The placement padding that should be applied between the element and its
   * surrounding container.
   * @default 12
   */
  containerPadding?: number;
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   * @default 0
   */
  offset?: number;
  /**
   * The additional offset applied along the cross axis between the element and its
   * anchor element.
   * @default 0
   */
  crossOffset?: number;
  /**
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when
   * there is insufficient room for it to render completely.
   * @default true
   */
  shouldFlip?: boolean;
  // /**
  //  * The element that should be used as the bounding container when calculating container offset
  //  * or whether it should flip.
  //  */
  // boundaryElement?: Element,
  /** Whether the element is rendered. */
  isOpen?: boolean;
}
