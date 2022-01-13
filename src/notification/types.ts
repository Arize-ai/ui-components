import { SeverityLevel } from '../types';

/**
 * A object structure that captures a notice
 */
export type NoticeDefinition = {
  variant: SeverityLevel;
  /**
   * A unique identifier for the notice.
   */
  id: string;
  title: string;
  /**
   * An optional message to display below the title
   */
  message?: string;
  /**
   * If set, the notice will have a action button
   * Note: The notice will not expire if the action is set
   */
  action?: {
    text: string;
    onClick: () => void;
  };
  /**
   * The time it takes for the notice to expire
   * @default 5000
   */
  expireMs?: number;
};

/**
 * A configuration object that can be used to construct a noticeDefinition
 */
export type NoticeConfig = Omit<NoticeDefinition, 'id'>;
