import React, { PropsWithChildren, useState } from 'react';
import { Button, Heading, Icon, Icons, Provider, View } from '../../src';
import { css } from '@emotion/react';

export function ThemeToggleWrap({
  children,
  defaultLight = false,
}: PropsWithChildren<{ defaultLight?: boolean }>) {
  const [isLight, setIsLight] = useState<boolean>(defaultLight);
  return (
    <div
      css={css`
        position: relative;
        .theme-toggle {
          position: absolute;
          right: 8px;
          top: 8px;
          z-index: 100;
        }
      `}
    >
      <Provider theme={isLight ? 'light' : 'dark'}>
        <Button
          className="theme-toggle"
          onClick={() => setIsLight(!isLight)}
          variant="default"
          icon={
            <Icon
              svg={isLight ? <Icons.SunOutline /> : <Icons.MoonOutline />}
            />
          }
        ></Button>

        <View backgroundColor="grey-75" padding="size-300">
          {children}
        </View>
      </Provider>
    </div>
  );
}
