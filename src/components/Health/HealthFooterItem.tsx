import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPX} from '~/utils/responsive';
import Typography from '~/styles/Typography';

type HealthFooterItemProps = {
  title: string;
  text: string;
  lable: string;
};

const HealthFooterItem = ({title, text, lable}: HealthFooterItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.lable}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.lable}>{lable}</Text>
    </View>
  );
};

export default HealthFooterItem;

const styles = StyleSheet.create({
  item: {
    width: widthPX(67.5, 375),
    alignItems: 'center',
  },
  lable: {
    ...Typography.Caption.Large,
  },
  text: {
    ...Typography.Title.Large,
    marginVertical: 8,
  },
});
