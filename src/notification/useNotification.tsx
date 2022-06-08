import React, { ReactNode, useRef, useMemo } from 'react';
import { Notification, NotificationProps } from './Notification';
import { NoticeConfig } from './types';

export type NoticeFn = (noticeArgs: NoticeConfig) => void;

export function useNotification(
  options?: NotificationProps
): [NoticeFn, ReactNode] {
  const notification = useRef<Notification>(null);
  const holderRef = useRef<ReactNode>(
    <Notification {...options} ref={notification} />
  );
  const notice = useMemo(() => {
    return (args: NoticeConfig) => notification.current?.add(args);
  }, [notification]);

  return [notice, holderRef.current];
}
