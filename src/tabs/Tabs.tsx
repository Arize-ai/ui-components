import React, {
  useState,
  Children,
  cloneElement,
  ReactNode,
  isValidElement,
  ReactElement,
  HtmlHTMLAttributes,
} from 'react';
import { Text } from '../content';
import { css } from '@emotion/react';
import theme from '../theme';
import { Orientation } from '../types/orientation';
import { transparentize } from 'polished';

type Tab = TabPaneProps & {
  key: string;
  node: ReactNode;
};

const tabsContainerCSS = css`
  display: flex;
  &[data-orientation='horizontal'] {
    flex-direction: column;
  }
  &[data-orientation='vertical'] {
    flex-direction: row;
  }
`;
const tabListCSS = css`
  display: flex;
  --tab-border-color: ${theme.components.tabs.borderColor};
  --tab-hover-color: ${transparentize(0.2, theme.colors.arizeBlue)};
  --tab-selected-border-color: ${theme.colors.arizeBlue};

  button {
    box-sizing: border-box; /* place the border inside */
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0 ${theme.spacing.padding16}px;
    height: 30px;
    transition: 0.3s;
    font-weight: bold;
    border-color: var(--tab-border-color);

    display: flex;
    align-items: center;
    gap: ${theme.spacing.padding4}px;
  }

  &[data-orientation='horizontal'] {
    flex-direction: row;
    border-bottom: 1px solid var(--tab-border-color);
    button {
      border-bottom: 2px solid transparent;
      &:hover {
        border-color: var(--tab-hover-color);
      }
      &[data-selected='true'] {
        border-color: var(--tab-selected-border-color);
      }
    }
  }
  &[data-orientation='vertical'] {
    flex-direction: column;
    border-right: 1px solid var(--tab-border-color);
    button {
      border-right: 2px solid transparent;
      &:hover {
        border-color: var(--tab-hover-color);
      }
      &[data-selected='true'] {
        border-color: var(--tab-selected-border-color);
      }
    }
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
  /**
   * The orientation of the tabs. Defaults to horizontal
   * @default horizontal
   */
  orientation?: Orientation;
};

/**
 * A re-usable, accessible tabs component
 */
export function Tabs({
  children,
  className,
  onChange,
  orientation = 'horizontal',
}: TabsProps) {
  const tabs = parseTabList(children);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div
      className={`ac-tabs ${className}`}
      data-orientation={orientation}
      css={tabsContainerCSS}
    >
      <div role="tablist" data-orientation={orientation} css={tabListCSS}>
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
              {...tab?.tabListItemProps}
            >
              <Text
                textSize="medium"
                weight="heavy"
                color={isSelected ? 'white90' : 'white70'}
              >
                {tab.name}
              </Text>
              {tab?.extra}
            </button>
          );
        })}
      </div>
      <div className="ac-tabs__pane-container">
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child as ReactElement<TabPaneChildFCProps>, {
              isSelected: index === selectedIndex,
            });
          }
          return null;
        })}
      </div>
    </div>
  );
}

type TabPaneChildFCProps = { isSelected: boolean };
/**
 * Function component child for lazy loading support. See storybook
 */
type TabPaneChildFC = (props: TabPaneChildFCProps) => ReactNode;
interface TabPaneProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'children'> {
  name: string;
  extra?: ReactNode;
  children: ReactNode | TabPaneChildFC;
  className?: string;
  /**
   * Props for the tablist item. Use for data-testid etc.
   */
  tabListItemProps?: { [`data-testid`]: string };
}

export const TabPane = ({
  name,
  children,
  className,
  isSelected = false,
  ...divProps
}: TabPaneProps & { isSelected?: boolean }) => {
  return (
    <div
      data-tab-name={name}
      {...divProps}
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
