import React from 'react';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  interpolate,
  SharedValue,
} from 'react-native-reanimated';
import {StyleSheet, Text, View} from 'react-native';
import Typography from '~/styles/Typography';

type CircularProgressProps = {
  progress: SharedValue<number>;
  percent: number;
  size?: number;
  strokeWidth?: number;
};

const AnimatedPath = Animated.createAnimatedComponent(Path);
const {PI, cos, sin} = Math;

const CircularProgress = ({
  progress,
  percent,
  size = 90,
  strokeWidth = 16,
}: CircularProgressProps) => {
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const A = PI + PI * 0.4;
  const startAngle = PI + PI * 0.2;
  const endAngle = 2 * PI - PI * 0.2;

  // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
  const x1 = cx - r * cos(startAngle);
  const y1 = -r * sin(startAngle) + cy;
  const x2 = cx - r * cos(endAngle);
  const y2 = -r * sin(endAngle) + cy;
  const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;
  const circumference = r * A;

  const animatedProps = useAnimatedProps(() => {
    const a = interpolate(progress.value, [0, 1], [0, A]);
    const strokeDashoffset = a * r;
    return {
      strokeDashoffset,
    };
  });

  return (
    <Svg width={size} height={size} fill={'none'}>
      <Path
        stroke="#DFDFDF"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        d={d}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <AnimatedPath
        stroke="#3C6CE7"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        animatedProps={animatedProps}
        d={d}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <View style={styles.container}>
        <Text style={styles.title}>{percent}</Text>
        <Text style={styles.text}>ปกติ</Text>
      </View>
    </Svg>
  );
};

export default CircularProgress;

const styles = StyleSheet.create({
  container: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    ...Typography.Base.Large,
    color: '#3C6CE7',
    marginBottom: 8,
  },
  text: {
    ...Typography.Base.Small,
  },
});
