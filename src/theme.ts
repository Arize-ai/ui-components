const baseColors = {
  dark1: '#0B1015', // body bg
  dark2: '#17202A', // nav bg
  dark3: '#707070',
  dark4: '#1C232B', // card bg
  dark5: '#2D353E',
  text1: '#FFFFFF',
  text2: '#D4D4D5',
  text3: '#BBBDBF',
  text4: '#D4D4D5',
  text5: '#A3A6A9',
};

const baseFontSizes = {
  xsmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '24px',
};

const theme = {
  colors: {
    ...baseColors,
    primary: '#db247c', // pink
    secondary: '#db247c', // blue
    grayBorder: '#2e363e',
    statusInfo: '#91d5ff',
    statusSuccess: '#41bc94', // RGB independent success color
    statusWarning: '#f1c64d',
    statusDanger: '#db247c',
  },
  fontSizes: {
    ...baseFontSizes,
  },
  spacing: {
    popover: {
      /**
       * The offset is the distance between the source and the popover edge (or the end of the tip, when there is a tip).
       */
      offset: 6,
    },
  },
};

export default theme;
