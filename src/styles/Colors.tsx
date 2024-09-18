type scale = {
  100: string;
};

type palettes = {
  Background: scale;
  Text: scale;
  Badge: scale;
  Shadow: scale;
  AntiFlashWhite: scale;
  RoyalBlue: scale;
  AmericanSilver: scale;
};

const Colors: palettes = {
  Background: {
    100: '#FFFFFF',
  },
  Text: {
    100: '#464646',
  },
  Badge: {
    100: '#FFFFFF',
  },
  Shadow: {
    100: '#C4DAFF50',
  },
  AntiFlashWhite: {
    100: '#F1F1F1',
  },
  RoyalBlue: {
    100: '#3C6CE7',
  },
  AmericanSilver: {
    100: '#CFCFCF',
  },
};

export default Colors;
