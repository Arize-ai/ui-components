import { createContext, useContext } from 'react';
import { AccordionProps } from './Accordion';

interface AccordionContextType {
  /**
   * The position of the arrow icon in the accordion item
   * @default 'end'
   */
  arrowPosition?: AccordionProps['arrowPosition'];
  /**
   * The size of the accordion item
   * @default 'M'
   */
  size?: AccordionProps['size'];
}
export const AccordionContext = createContext<AccordionContextType>({
  arrowPosition: 'end',
  size: 'M',
});

export function useAccordionContext(): AccordionContextType {
  return useContext(AccordionContext);
}
