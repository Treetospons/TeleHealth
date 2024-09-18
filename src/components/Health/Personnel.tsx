import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Colors from '~/styles/Colors';
import Typography from '~/styles/Typography';
import EditIcon from '~/assets/image/svg/edit-icon.svg';
import PersonnelItem from './PersonnelItem';
import {personnels} from '~/services/mockPersonnels';

type PersonnelProps = {
  containerStyle?: ViewStyle;
};

const Personnel = ({containerStyle}: PersonnelProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <Text style={styles.title}>ข้อมูลจากบุคลากร</Text>
      </View>
      {personnels.map((item, index) => (
        <PersonnelItem item={item} key={`personnel-item-${index}`} />
      ))}
    </View>
  );
};

export default Personnel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background[100],
  },
  header: {
    alignContent: 'center',
  },
  title: {
    ...Typography.Title.Large,
  },
});
