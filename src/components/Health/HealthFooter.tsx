import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import Colors from '~/styles/Colors';
import LunghCapacityIcon from '~/assets/image/svg/lungh-capacity-icon.svg';
import ChevronRightIcon from '~/assets/image/svg/chevron-right-icon.svg';
import {widthPX} from '~/utils/responsive';
import Typography from '~/styles/Typography';
import HealthFooterItem from './HealthFooterItem';

const HealthFooter = () => {
  return (
    <Shadow
      startColor={Colors.Shadow[100]}
      distance={8}
      containerStyle={styles.shadow}
      style={styles.cardShadow}>
      <View style={styles.card}>
        <View style={styles.containerHeader}>
          <LunghCapacityIcon width={24} height={24} />
          <View style={styles.header}>
            <Text style={styles.title}>สมรรถภาพปอด</Text>
            <Text style={styles.lableTitle}>22/07/2567</Text>
          </View>
          <ChevronRightIcon width={24} height={24} />
        </View>
        <View style={styles.content}>
          <HealthFooterItem title="FVC" text="3.01" lable="ลิตร" />
          <HealthFooterItem title="FEV1" text="2.59" lable="ลิตร" />
          <HealthFooterItem title="FEF" text="3.12" lable="ลิตร/วินาที" />
          <HealthFooterItem title="FEV1/FVC" text="75" lable="เปอร์เซ็นต์" />
        </View>
      </View>
    </Shadow>
  );
};

export default HealthFooter;

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
    justifyContent: 'space-between',
  },
});
