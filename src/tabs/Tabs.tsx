import React, {
  useState,
  Children,
  cloneElement,
  ReactNode,
  isValidElement,
} from 'react';
import { Text } from '../content';
import { css } from '@emotion/core';
import theme from '../theme';

type Tab = TabPaneProps & {
  key: string;
  node: ReactNode;
};

const tabListCSS = css`
  overflow: hidden;
  border-bottom: 0.5px solid ${theme.colors.grayBorder};

  button {
    box-sizing: border-box; /* place the border inside */
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0 ${theme.spacing.padding16}px;
    height: 30px;
    transition: 0.3s;
    border-bottom: 4px solid transparent;
    font-weight: bold;
  }

  button:hover {
    opacity: 0.8;
  }

  button[data-selected='true'] {
    border-bottom: 4px solid ${theme.colors.arizeBlue};
  }
`;

function parseTabList(children: ReactNode): Tab[] {
  return React.Children.toArray(children)
    .map((node, index) => {
      if (React.isValidElement(node)) {
        return {
          ...node.props,
          key: node.key ? String(node.key) : String(index),
          node: node,
        };
      }
      return null;
    })
    .filter(tab => tab);
}

export type TabsProps = {
  children: ReactNode[];
  className?: string;
  onChange?: (index: number) => void;
};

/**
 * A re-usable, accessible tabs component
 */
export function Tabs({ children, className, onChange }: TabsProps) {
  const tabs = parseTabList(children);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div className={`ac-tabs ${className}`}>
      <div role="tablist" data-orientation="horizontal" css={tabListCSS}>
        {tabs.map((tab, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={tab.key}
              data-selected={isSelected}
              role="tab"
              onClick={e => {
                e.preventDefault();
                setSelectedIndex(index);
                onChange && onChange(index);
              }}
            >
              <Text
                textSize="medium"
                weight="heavy"
                color={isSelected ? 'white90' : 'white70'}
              >
                {tab.name}
              </Text>
            </button>
          );
        })}
      </div>
      <div>
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              isSelected: index === selectedIndex,
            });
          }
          return null;
        })}
      </div>
    </div>
  );
}

/**
 * Function component child for lazy loading support. See storybook
 */
type TabPaneChildFC = (args: { isSelected: boolean }) => ReactNode;
type TabPaneProps = {
  name: string;
  children: ReactNode | TabPaneChildFC;
  className?: string;
};

export const TabPane = ({
  name,
  children,
  className,
  isSelected = false,
}: TabPaneProps & { isSelected?: boolean }) => {
  return (
    <div
      data-tab-name={name}
      hidden={!isSelected}
      role="tabpanel"
      className={className}
      tabIndex={isSelected ? 0 : -1}
      css={css`
        outline: none;
      `}
    >
      {typeof children === 'function' ? children({ isSelected }) : children}
    </div>
  );
};

Tabs.TabPane = TabPane;
