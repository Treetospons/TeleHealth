type styles = {
  Black: string;
  Bold: string;
  ExtraBold: string;
  ExtraLight: string;
  Light: string;
  Medium: string;
  Regular: string;
  SemiBold: string;
  Thin: string;
};

type fonts = {
  NotoSansThai: styles;
};

const Fonts: fonts = {
  NotoSansThai: {
    Black: 'NotoSansThai-Black',
    Bold: 'NotoSansThai-Bold',
    ExtraBold: 'NotoSansThai-ExtraBold',
    ExtraLight: 'NotoSansThai-ExtraLight',
    Light: 'NotoSansThai-Light',
    Medium: 'NotoSansThai-Medium',
    Regular: 'NotoSansThai-Regular',
    SemiBold: 'NotoSansThai-SemiBold',
    Thin: 'NotoSansThai-Thin',
  },
};

export default Fonts;
