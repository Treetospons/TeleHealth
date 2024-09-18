import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const px = (size: number, design: number) => {
  return (size * 100) / design / 100;
};

export const widthPX = (size: number, design: number) => {
  return width * px(size, design);
};

export const heightPX = (size: number, design: number) => {
  return height * px(size, design);
};
