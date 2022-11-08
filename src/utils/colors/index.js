const MainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  blue1: '#0066CB',
};

export const colors = {
  primary: MainColors.green1,
  secondary: MainColors.dark1,
  tertiary: MainColors.blue1,
  white: 'white',
  black: 'black',
  disable: MainColors.grey3,
  text: {
    primary: MainColors.dark1,
    secondary: MainColors.grey1,
    menuInactive: MainColors.dark2,
    menuActive: MainColors.green1,
    subTitle: MainColors.dark3,
  },
  button: {
    primary: {
      background: MainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: MainColors.dark1,
    },
  },
  border: MainColors.grey2,
  cardLight: MainColors.green2,
};
