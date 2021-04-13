import React, {
  useState,
  Children,
  cloneElement,
  ReactNode,
  isValidElement,
} from 'react';
import { css } from '@emotion/core';
import theme from './theme';

type Tab = TabPaneProps & {
  key: string;
  node: ReactNode;
};

const tabList = css`
  overflow: hidden;
  border-bottom: 0.5px solid ${theme.colors.grayBorder};

  button {
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    border-bottom: 3px solid transparent;
    text-transform: capitalize;
    font-size: 16px;
    color: ${theme.colors.text5};
    font-weight: bold;
    width: 35%;
  }

  button:hover {
    opacity: 0.8;
  }

  button[data-selected='true'] {
    border-bottom: 3px solid ${theme.colors.primary};
    color: ${theme.colors.text1};
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
    .filter((tab) => tab);
}

export type TabsProps = {
  children: ReactNode[];
  className?: string;
  onChange?: (index: number) => void;
};

/**
 * A re-usable, accessible tabs component
 */
function Tabs({ children, className, onChange }: TabsProps) {
  const tabs = parseTabList(children);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div className={className}>
      <div role="tablist" data-orientation="horizontal" css={tabList}>
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            data-selected={index === selectedIndex}
            onClick={(e) => {
              e.preventDefault();
              setSelectedIndex(index);
              onChange && onChange(index);
            }}
          >
            {tab.name}
          </button>
        ))}
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

type TabPaneProps = {
  name: string;
  children: ReactNode;
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
      {children}
    </div>
  );
};

Tabs.TabPane = TabPane;

export default Tabs;
