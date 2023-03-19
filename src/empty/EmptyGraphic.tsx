import React, { useMemo } from 'react';
import { assertUnreachable } from '../utils/typeUtils';
import { EmptyDocuments } from './graphics';

export type EmptyGraphicProps = {
  /**
   * The icon to display
   * @default 'documents'
   **/
  graphicKey: 'documents';
  /**
   * The size of the icon
   * @default 'S'
   */
  size?: 'S' | 'M' | 'L';
};

export function EmptyGraphic(props: EmptyGraphicProps) {
  const { size = 'M', graphicKey = 'documents' } = props;
  const dimensions = useMemo(() => {
    switch (size) {
      case 'S':
        return {
          width: 72,
          height: 72,
        };
      case 'M':
        return {
          width: 96,
          height: 96,
        };
      case 'L':
        return {
          width: 136,
          height: 136,
        };
      default:
        assertUnreachable(size);
    }
  }, [size]);
  const graphic = useMemo(() => {
    switch (graphicKey) {
      case 'documents':
        return <EmptyDocuments {...dimensions} />;
      default:
        assertUnreachable(graphicKey);
    }
  }, [graphicKey, dimensions]);

  return <div>{graphic}</div>;
}
