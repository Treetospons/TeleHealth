/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import Colors from '~/styles/Colors';
import ChevronRightIcon from '~/assets/image/svg/chevron-right-icon.svg';
import {widthPX} from '~/utils/responsive';
import Typography from '~/styles/Typography';
import {healthMetric} from '~/types/components/Health';

type HealthMenuProps = {
  item: healthMetric;
};

const HealthMenu = ({item}: HealthMenuProps) => {
  return (
    <Shadow
      startColor={Colors.Shadow[100]}
      distance={8}
      containerStyle={styles.shadow}
      style={styles.cardShadow}>
      <View style={styles.card}>
        <View style={styles.containerHeader}>
          {item.icon}
          <ChevronRightIcon width={24} height={24} />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentRightRow}>
            <Text style={styles.value}>{item.data.value}</Text>
            <Text
              style={{
                ...styles.lable,
                marginTop: 6,
                marginBottom: 3,
                marginLeft: 8,
              }}>
              {item.data.unit}
            </Text>
          </View>
          <Text style={styles.lable}>{item.date}</Text>
        </View>
      </View>
    </Shadow>
  );
};

export default HealthMenu;

const styles = StyleSheet.create({
  shadow: {
    marginTop: 16,
  },
  cardShadow: {
    width: widthPX(163.5, 375),
  },
  card: {
    width: widthPX(163.5, 375),
    padding: 16,
    borderRadius: 16,
    borderColor: Colors.Background[100],
    borderWidth: 1,
  },
  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    marginTop: 4,
  },
  title: {
    ...Typography.Title.Small,
  },
  value: {
    ...Typography.Title.Large,
  },
  content: {
    width: '100%',
    marginTop: 8,
  },
  contentRightRow: {
    flexDirection: 'row',
  },
  lable: {
    ...Typography.Caption.Large,
  },
});
