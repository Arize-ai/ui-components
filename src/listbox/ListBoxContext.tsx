import { ListState } from '@react-stately/list';
import React from 'react';

// @ts-ignore
export const ListBoxContext = React.createContext<ListState<unknown>>(null);
