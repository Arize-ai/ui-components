import { Button } from '../button';
import { filterDOMProps } from '@react-aria/utils';
import { FocusableRef } from '@react-types/shared';
import { Menu } from './Menu';
import { MenuTrigger } from './MenuTrigger';
import { Icon, MoreHorizontalOutline } from '../icon';
import React, { forwardRef, ReactElement } from 'react';
import { ActionMenuProps } from '../types';

function ActionMenu<T extends object>(
  props: ActionMenuProps<T>,
  ref: FocusableRef<HTMLButtonElement>
) {
  const { children, buttonText, icon } = props;
  const buttonProps = filterDOMProps(props, { labelable: true });
  if (buttonProps['aria-label'] === undefined) {
    buttonProps['aria-label'] = 'actions';
  }

  return (
    <MenuTrigger
      isOpen={props.isOpen}
      defaultOpen={props.defaultOpen}
      onOpenChange={props.onOpenChange}
      align={props.align}
      direction={props.direction}
      shouldFlip={props.shouldFlip}
    >
      <Button
        variant="default"
        icon={icon ?? <Icon svg={<MoreHorizontalOutline />} />}
        ref={ref}
        {...buttonProps}
        children={buttonText}
      />
      <Menu
        children={children}
        items={props.items}
        disabledKeys={props.disabledKeys}
        onAction={props.onAction}
      />
    </MenuTrigger>
  );
}

/**
 * ActionMenu combines an ActionButton with a Menu for simple "more actions" use cases.
 */
const _ActionMenu = forwardRef(ActionMenu) as <T>(
  props: ActionMenuProps<T> & { ref?: FocusableRef<HTMLButtonElement> }
) => ReactElement;
export { _ActionMenu as ActionMenu };
