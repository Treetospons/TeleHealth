import {TextStyle} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';
import {widthPX} from '~/utils/responsive';

type base = {
  Large?: TextStyle;
  Medium?: TextStyle;
  Small?: TextStyle;
};

type typography = {
  Title: base;
  Body: base;
  Caption: base;
  Base: base;
  Badge: base;
  Consult: base;
};

const Typography: typography = {
  Title: {
    Large: {
      fontFamily: Fonts.NotoSansThai.SemiBold,
      fontSize: 18,
      color: Colors.Text[100],
      lineHeight: widthPX(25.92, 375),
    },
    Medium: {
      fontFamily: Fonts.NotoSansThai.SemiBold,
      fontSize: 16,
      color: Colors.Text[100],
      lineHeight: widthPX(23.68, 375),
    },
    Small: {
      fontFamily: Fonts.NotoSansThai.SemiBold,
      fontSize: 14,
      color: Colors.Text[100],
      lineHeight: widthPX(20.44, 375),
    },
  },
  Body: {
    Small: {
      fontFamily: Fonts.NotoSansThai.Regular,
      fontSize: 14,
      color: Colors.Text[100],
      lineHeight: widthPX(20.16, 375),
    },
  },
  Caption: {
    Large: {
      fontFamily: Fonts.NotoSansThai.Regular,
      fontSize: 12,
      color: Colors.Text[100],
      lineHeight: widthPX(17.28, 375),
    },
  },
  Base: {
    Large: {
      fontFamily: Fonts.NotoSansThai.SemiBold,
      fontSize: 14,
      color: Colors.Text[100],
      lineHeight: widthPX(15.4, 375),
    },
    Small: {
      fontFamily: Fonts.NotoSansThai.Regular,
      fontSize: 10,
      color: Colors.Text[100],
    },
  },
  Badge: {
    Small: {
      fontFamily: Fonts.NotoSansThai.Regular,
      fontSize: 12,
      color: Colors.Text[100],
      lineHeight: widthPX(16.32, 375),
    },
  },
  Consult: {
    Medium: {
      fontFamily: Fonts.NotoSansThai.SemiBold,
      fontSize: 16,
      color: Colors.Text[100],
      lineHeight: widthPX(23.68, 375),
    },
    Small: {
      fontFamily: Fonts.NotoSansThai.Regular,
      fontSize: 14,
      color: Colors.Text[100],
      lineHeight: widthPX(20.72, 375),
    },
  },
};

export default Typography;
