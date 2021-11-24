import { ListState } from '@react-stately/list';
import React from 'react';

// @ts-ignore ignore the need for default type safe values
export const ListBoxContext = React.createContext<ListState<unknown>>(null);
