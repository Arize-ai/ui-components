import React, {
  Children,
  cloneElement,
  ReactNode,
  isValidElement,
  ReactElement,
  HtmlHTMLAttributes,
} from 'react';
import { useControlledState } from '@react-stately/utils';
import { css } from '@emotion/react';
import { Text } from '../content';
import { Orientation } from '../types/orientation';

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
  // if nested in a card, inherit the scope's border color
  --tab-border-color: var(
    --scope-border-color,
    var(--ac-global-border-color-default)
  );
  --tab-hover-color: var(--ac-global-color-primary-900);
  --tab-selected-border-color: var(--ac-global-color-primary);

  .ac-tabs__tab-list-item {
    box-sizing: border-box; /* place the border inside */
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0 var(--ac-global-dimension-static-size-200);
    min-height: 30px;
    transition: 0.3s;
    font-weight: bold;
    border-color: var(--tab-border-color);

    display: flex;
    align-items: center;
    gap: var(--ac-global-dimension-static-size-65);
  }

  .ac-tabs__tab-list-item[data-is-hidden='true'] {
    display: none;
  }

  &[data-orientation='horizontal'] {
    flex-direction: row;
    border-bottom: 1px solid var(--tab-border-color);
    .ac-tabs__tab-list-item {
      border-bottom: 2px solid transparent;
      &:hover {
        border-color: var(--tab-hover-color);
      }
      &[data-selected='true'] {
        border-color: var(--tab-selected-border-color);
      }
    }
    .ac-tabs__extra {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  &[data-orientation='vertical'] {
    flex-direction: column;
    border-right: 1px solid var(--tab-border-color);
    .ac-tabs__tab-list-item {
      border-right: 2px solid transparent;
      &:hover {
        border-color: var(--tab-hover-color);
      }
      &[data-selected='true'] {
        border-color: var(--tab-selected-border-color);
      }
    }
    .ac-tabs__extra {
      display: flex;
      align-items: center;
      justify-content: center;
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
  /**
   * If specified, the index of the selected tab is controlled by the parent component rather than the internal state.
   */
  index?: number;
  onChange?: (index: number) => void;
  /**
   * The orientation of the tabs. Defaults to horizontal
   * @default horizontal
   */
  orientation?: Orientation;
  extra?: ReactNode; // Extra controls on the tablist
};

/**
 * A re-usable, accessible tabs component
 */
export function Tabs({
  children,
  className,
  index,
  onChange,
  orientation = 'horizontal',
  extra,
}: TabsProps) {
  // Filter out the nulls from the children so that tabs can be mounted conditionally
  children = Children.toArray(children).filter(child => child);
  const tabs = parseTabList(children);
  
  // Initialize the selected tab to the first non-hidden tab if there is no controlled value provided
  const defaultValue = tabs.findIndex(tab => !tab.hidden);
  const [selectedIndex, setSelectedIndex] = useControlledState(
    index,
    defaultValue,
    onChange
  );
  return (
    <div
      className={`ac-tabs ${className}`}
      data-orientation={orientation}
      css={tabsContainerCSS}
      data-selected-tab-index={selectedIndex}
    >
      <div role="tablist" data-orientation={orientation} css={tabListCSS}>
        {tabs.map((tab, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={tab.key}
              data-selected={isSelected}
              data-tab-index={index}
              data-is-hidden={tab.hidden}
              role="tab"
              className="ac-tabs__tab-list-item"
              onClick={e => {
                e.preventDefault();
                setSelectedIndex(index);
              }}
              {...tab?.tabListItemProps}
            >
              <Text
                textSize="medium"
                weight="heavy"
                color={isSelected ? 'text-900' : 'text-700'}
              >
                {tab.name}
              </Text>
              {tab?.extra}
            </button>
          );
        })}
        {extra && <div className="ac-tabs__extra">{extra}</div>}
      </div>
      <div className="ac-tabs__pane-container">
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child as ReactElement<TabPaneChildFCProps>, {
              isSelected: index === selectedIndex,
              index,
            });
          }
          return null;
        })}
      </div>
    </div>
  );
}

type TabPaneChildFCProps = {
  /**
   * Whether or not the tab is selected
   */
  isSelected: boolean;
  /**
   * The numeric index managed by the Tabs component. If a tab is hidden, it will still count towards the index
   */
  index: number;
};
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
  /**
   * Whether or not the tab should be conditionally hidden or not.
   * Useful when trying to hide a tab based on permissions or some other hueristic
   * @default false
   */
  hidden?: boolean;
}

export const TabPane = ({
  name,
  children,
  className,
  isSelected = false,
  hidden = false,
  index,
  ...divProps
}: TabPaneProps & { isSelected?: boolean; index?: number }) => {
  return (
    <div
      data-tab-name={name}
      {...divProps}
      hidden={!isSelected || hidden}
      role="tabpanel"
      className={className}
      tabIndex={isSelected ? 0 : -1}
      css={css`
        outline: none;
      `}
    >
      {typeof children === 'function'
        ? children({ isSelected, index: index! })
        : children}
    </div>
  );
};

Tabs.TabPane = TabPane;
