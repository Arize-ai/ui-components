const baseColors = {
  dark1: '#0B1015', // body bg
  dark2: '#17202A', // nav bg
  dark3: '#707070',
  dark4: '#1C232B', // card bg
  dark5: '#2D353E',
  // TODO to be deprecated
  text1: '#FFFFFF',
  text2: '#D4D4D5',
  text3: '#BBBDBF',
  text4: '#D4D4D5',
  text5: '#A3A6A9',
};

const grayColors = {
  gray500: '#2D353E',
  gray400: '#39424D',
  gray200: '#646A70', // disabled text
};
const arizeColors = {
  arizePink: '#CA2A76',
  arizeGreen: '#48BB95',
  arizeBlue: '#227C9D',
};

const textColors = {
  white90: `rgba(255, 255, 255, 0.9)`,
  white70: `rgba(255, 255, 255, 0.7)`,
  white30: `rgba(255, 255, 255, 0.3)`,
};

const theme = {
  colors: {
    ...baseColors,
    ...arizeColors,
    ...grayColors,
    primary: '#db247c', // pink
    secondary: '#db247c', // blue
    grayBorder: '#2e363e',
    statusInfo: '#91d5ff',
    statusSuccess: '#41bc94', // RGB independent success color
    statusWarning: '#E69958',
    statusDanger: '#db247c',
    dividerColor: '#32383f',
    hoverBgColor: '#23292F',
  },
  textColors,
  // Add any component specific overrides here
  components: {
    accordion: {
      backgroundColor: '#1E2329',
    },
    tooltip: {
      backgroundColor: '#3C4C5D',
    },
  },
  typography: {
    weights: {
      heavy: 500,
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

  animation: {
    global: {
      /**
       * Fallback to 200ms as an animation duration
       */
      duration: 200,
    },
  },
};

export default theme;
