import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '~/styles/Colors';
import Typography from '~/styles/Typography';
import {widthPX} from '~/utils/responsive';
import ChevronRightIcon from '~/assets/image/svg/chevron-right-icon.svg';
import {Shadow} from 'react-native-shadow-2';

type personnel = {
  icon?: ReactNode;
  title: string;
  text: string;
};

type PersonnelItemProps = {
  item: personnel;
};

const PersonnelItem = ({item}: PersonnelItemProps) => {
  return (
    <Shadow
      startColor={Colors.Shadow[100]}
      distance={8}
      containerStyle={styles.shadow}
      style={styles.cardShadow}>
      <View style={styles.card}>
        <View style={styles.container}>
          {item.icon}
          <View style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.lable}>{item.text}</Text>
          </View>
          <ChevronRightIcon width={24} height={24} />
        </View>
      </View>
    </Shadow>
  );
};

export default PersonnelItem;

const styles = StyleSheet.create({
  shadow: {
    marginTop: 16,
  },
  cardShadow: {
    width: '100%',
  },
  card: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderColor: Colors.Background[100],
    borderWidth: 1,
    backgroundColor: Colors.Background[100],
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    width: widthPX(215, 375),
    marginHorizontal: 12,
    alignItems: 'flex-start',
  },
  title: {
    ...Typography.Title.Small,
  },
  lable: {
    ...Typography.Caption.Large,
  },
});
