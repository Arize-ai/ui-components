import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { Icon, SearchOutline, LoadingOutline } from '../icon';
import { Button } from '../button';
import { TextField, TextFieldRef, TextFieldProps } from '../textfield';
import { classNames } from '../utils';
import theme from '../theme';

export interface CompactSearchFieldProps
  extends Omit<TextFieldProps, 'isNested'> {
  /**
   * Whether or not there is a search in-flight
   * @default false
   */
  isSearching?: boolean;
}

export function CompactSearchField(props: CompactSearchFieldProps) {
  const { isSearching = false, onFocus, onBlur } = props;
  const inputRef = React.useRef<TextFieldRef>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  // Focus the input when the search button is clicked
  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    }
  }, [isExpanded]);

  return (
    <div
      css={css`
        display: inline-flex;
        flex-direction: row;
        border: 1px solid var(--ac-global-input-field-border-color);
        border-radius: ${theme.rounding.rounding4}px;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        background-color: var(--ac-global-input-field-background-color);
        & > .ac-button {
          flex: none;
          border: none;
          border-radius: 0;
        }
        & .ac-textfield,
        .ac-textfield:hover,
        .ac-textfield:active,
        .ac-textfield:focus {
          border: none !important;
          border-radius: 0 ${theme.rounding.rounding4}px
            ${theme.rounding.rounding4}px 0;

          min-width: 0;
          transition: width 0.2s ease-in-out;
        }
        &:not(.is-expanded) {
          .ac-textfield {
            width: 0;
            visibility: none;
          }
        }
        &.is-expanded {
          .ac-textfield {
            width: 200px;
          }
        }
        &.is-active {
          border-color: ${theme.components.textField.activeBorderColor};
        }
      `}
      className={classNames('ac-compact-search-field', {
        'is-expanded': isExpanded,
        'is-active': isActive,
      })}
    >
      <Button
        variant="quiet"
        icon={
          <Icon svg={isSearching ? <LoadingOutline /> : <SearchOutline />} />
        }
        onClick={() => setIsExpanded(true)}
        disabled={isExpanded}
      ></Button>
      <TextField
        ref={inputRef}
        {...props}
        isNested
        type="search"
        onFocus={e => {
          setIsActive(true);
          onFocus && onFocus(e);
        }}
        onBlur={e => {
          setIsActive(false);
          onBlur && onBlur(e);
        }}
      />
    </div>
  );
}
