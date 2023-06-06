import { lighten, darken } from 'polished';
import * as _colorPalette from './colorPalette';

export const colorPalette = _colorPalette;

const arizeColors = {
  arizePink: '#CA2A76',
  arizeGreen: '#48BB95',
  arizeBlue: '#227C9D',
  arizeLightBlue: '#72D9FF',
};

const borderColors = {
  grayBorder: '#2e363e',
  lightGrayBorder: '#768CA3',
  lightGrayHoverBorder: lighten(0.2, '#768CA3'),
};

const textColors = {
  white90: `rgba(255, 255, 255, 0.9)`,
  white70: `rgba(255, 255, 255, 0.7)`,
  white50: `rgba(255, 255, 255, 0.5)`,
  white30: `rgba(255, 255, 255, 0.3)`,
  inherit: 'inherit',
} as const;

const labelColors = {
  white: `rgba(255, 255, 255, 0.9)`,
  red: '#F85149',
  green: '#7EE787',
  orange: '#E69958',
  blue: '#72D9FF',
  purple: '#ADA1FF',
  gray: 'rgba(255, 255, 255, 0.7)',
} as const;

/**
 * Colors to designate specific meaning (e.g. primary / reference)
 */
export const designationColors = {
  designationTurquoise: colorPalette.turquoiseColors.turquoise500,
  designationPurple: colorPalette.purpleColors.purple500,
} as const;

const { grayColors } = _colorPalette;
export const theme = {
  colors: {
    ...arizeColors,
    ...grayColors,
    ...borderColors,
    statusInfo: '#72D9FF',
    statusSuccess: '#7EE787', // RGB independent success color
    statusWarning: '#E69958',
    statusDanger: '#F85149',
    dividerColor: '#32383f',
    hoverBgColor: _colorPalette.grayColors.gray400,
  },
  textColors,
  labelColors,
  // Add any component specific overrides here
  components: {
    card: {
      backgroundColor: _colorPalette.grayColors.gray800,
      borderColor: _colorPalette.grayColors.gray400,
    },
    accordion: {
      backgroundColor: _colorPalette.grayColors.gray500,
      borderColor: _colorPalette.grayColors.gray400,
    },
    tabs: {
      borderColor: _colorPalette.grayColors.gray400,
    },
    tooltip: {
      backgroundColor: '#3C4C5D',
      borderColor: lighten(0.3, '#3C4C5D'),
    },
    actionTooltip: {
      backgroundColor: '#2D3845',
      borderColor: '#6F7D8C',
    },
    dropdown: {
      backgroundColor: _colorPalette.grayColors.gray500,
      borderColor: _colorPalette.grayColors.gray100,
      hoverBorderColor: lighten(0.2, _colorPalette.grayColors.gray100),
      activeBorderColor: arizeColors.arizeLightBlue,
      activeBackgroundColor: darken(0.02, _colorPalette.grayColors.gray500),
    },
    textField: {
      borderColor: _colorPalette.grayColors.gray100,
      hoverBorderColor: lighten(0.2, _colorPalette.grayColors.gray100),
      activeBorderColor: arizeColors.arizeLightBlue,
      backgroundColor: _colorPalette.grayColors.gray500,
      activeBackgroundColor: darken(0.02, _colorPalette.grayColors.gray500),
    },
    button: {
      primaryBorderColor: '#5BAECC',
      primaryHoverBackgroundColor: '#5BAECC',
      defaultBorderColor: borderColors.lightGrayBorder,
      defaultHoverBackgroundColor: '#64768A',
      dangerBorderColor: lighten(0.1, '#F85149'),
      dangerHoverBackgroundColor: lighten(0.1, '#F85149'),
      successColor: '#3C6E40',
      successBorderColor: '#7EE787',
      successHoverBackgroundColor: '#7EE787',
    },
    modal: {
      backgroundColor: _colorPalette.grayColors.gray800,
    },
  },
  typography: {
    weights: {
      heavy: 600,
      normal: 400,
    },
    sizes: {
      xxxlarge: {
        fontSize: 44,
        lineHeight: 52,
      },
      xxlarge: {
        fontSize: 28,
        lineHeight: 36,
      },
      xlarge: {
        fontSize: 18,
        lineHeight: 28,
      },
      large: {
        fontSize: 16,
        lineHeight: 24,
      },
      medium: {
        fontSize: 14,
        lineHeight: 20,
      },
      small: {
        fontSize: 12,
        lineHeight: 16,
      },
      xsmall: {
        fontSize: 10,
        lineHeight: 16,
      },
    },
  },
  spacing: {
    padding4: 4,
    padding8: 8,
    padding16: 16,
    padding24: 24,
    margin4: 4,
    margin8: 8,
    margin16: 16,
    margin24: 24,
    popover: {
      /**
       * The offset is the distance between the source and the popover edge (or the end of the tip, when there is a tip).
       */
      offset: 6,
    },
    tooltip: {
      /**
       * The offset is the distance between the source and the tooltip edge (or the end of the tip, when there is a tip).
       */
      offset: 6,
    },
    outline: {
      thin: 2,
    },
  },
  rounding: {
    rounding4: 4,
  },
  animation: {
    global: {
      /**
       * Fallback to 200ms as an animation duration
       */
      duration: 200,
    },
  },
  /**
   * The height of a single line of form input etc.
   */
  singleLineHeight: 36,
  borderRadius: {
    medium: 4,
  },
  opacity: {
    disabled: 0.6,
  },
};

export default theme;
