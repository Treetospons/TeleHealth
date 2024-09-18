import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Colors from '~/styles/Colors';
import EditIcon from '~/assets/image/svg/edit-icon.svg';
import HealthHeader from './HealthHeader';
import Typography from '~/styles/Typography';
import HealthMenu from './HealthMenu';
import HealthFooter from './HealthFooter';
import {healthMetrics} from '~/services/mockHealthMetrics';

type HealthProps = {
  containerStyle?: ViewStyle;
};

const Health = ({containerStyle}: HealthProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <Text style={styles.title}>ข้อมูลสุขภาพ</Text>
        <EditIcon width={24} height={24} />
      </View>
      <HealthHeader />
      <View style={styles.menu}>
        {healthMetrics.map((item, index) => (
          <HealthMenu item={item} key={`health-item-${index}`} />
        ))}
      </View>
      <HealthFooter />
    </View>
  );
};

export default Health;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background[100],
  },
  header: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...Typography.Title.Large,
  },
  menu: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
