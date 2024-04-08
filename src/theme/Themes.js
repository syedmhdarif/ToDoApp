import color from 'color';

import {Platform, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const THEME = {
  deviceHeight,
  deviceWidth,
  colors: {
    primary: '#3d92c2',
    secondary: '#ffd463',
    tertiary: '#FFD1DD',
    sub_primary: '#99c6df',
    dark: '#1e3656',
    light: '#DDE3EE',
    white: '#fff',
    black: '#ddd',
  },
};

export {THEME as default};
