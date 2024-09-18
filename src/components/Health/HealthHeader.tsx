/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import Colors from '~/styles/Colors';
import BMIIcon from '~/assets/image/svg/bmi-icon.svg';
import ChevronRightIcon from '~/assets/image/svg/chevron-right-icon.svg';
import {widthPX} from '~/utils/responsive';
import Typography from '~/styles/Typography';
import CircularProgress from './CircularProgress';
import {useSharedValue} from 'react-native-reanimated';

const HealthHeader = () => {
  const progress = useSharedValue(0);
  const [percent] = useState(20);

  progress.value = percent / 100 + 1;

  return (
    <Shadow
      startColor={Colors.Shadow[100]}
      distance={8}
      containerStyle={styles.shadow}
      style={styles.cardShadow}>
      <View style={styles.card}>
        <View style={styles.containerHeader}>
          <BMIIcon width={24} height={24} />
          <View style={styles.header}>
            <Text style={styles.title}>ดัชนีมวลกาย BMI</Text>
            <Text style={styles.lableTitle}>22/07/2567</Text>
          </View>
          <ChevronRightIcon width={24} height={24} />
        </View>
        <View style={styles.content}>
          <View style={styles.contentLeft}>
            <CircularProgress progress={progress} percent={percent} />
          </View>
          <View
            style={{
              ...styles.contentRight,
              marginLeft: 16,
            }}>
            <Text style={styles.lable}>น้ำหนัก</Text>
            <View style={styles.contentRightRow}>
              <Text style={styles.title}>70.00</Text>
              <Text
                style={{
                  ...styles.lable,
                  marginTop: 6,
                  marginLeft: 8,
                }}>
                กก.
              </Text>
            </View>
          </View>
          <View
            style={{
              ...styles.contentRight,
              marginLeft: 8,
            }}>
            <Text style={styles.lable}>ส่วนสูง</Text>
            <View style={styles.contentRightRow}>
              <Text style={styles.title}>170.00</Text>
              <Text
                style={{
                  ...styles.lable,
                  marginTop: 6,
                  marginLeft: 8,
                }}>
                ซม.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Shadow>
  );
};

export default HealthHeader;

const styles = StyleSheet.create({
  shadow: {
    marginTop: 16,
  },
  cardShadow: {
    width: '100%',
  },
  card: {
    padding: 16,
    borderRadius: 16,
    borderColor: Colors.Background[100],
    borderWidth: 1,
  },
  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    width: widthPX(247, 375),
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    ...Typography.Title.Small,
  },
  lableTitle: {
    ...Typography.Caption.Large,
    marginLeft: 8,
  },
  content: {
    width: widthPX(311, 375),
    marginTop: 16,
    flexDirection: 'row',
  },
  contentLeft: {
    width: widthPX(92, 375),
    height: widthPX(80, 375),
    alignItems: 'center',
  },
  contentRight: {
    width: widthPX(97.5, 375),
    justifyContent: 'flex-end',
  },
  contentRightRow: {
    flexDirection: 'row',
  },
  lable: {
    ...Typography.Body.Small,
  },
});
