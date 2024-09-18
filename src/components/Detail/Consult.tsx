import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import Colors from '~/styles/Colors';
import Typography from '~/styles/Typography';
import MessagePlusCircleIcon from '~/assets/image/svg/message-plus-circle-icon.svg';

const Consult = () => {
  return (
    <Shadow
      startColor={Colors.Shadow[100]}
      distance={8}
      containerStyle={styles.shadow}
      style={styles.cardShadow}>
      <View style={styles.conatiner}>
        <View style={styles.header}>
          <MessagePlusCircleIcon width={24} height={24} />
          <Text style={styles.title}>ปรึกษาด่วน</Text>
        </View>
        <Text style={styles.text}>ปรึกษาสุขภาพกับบุคลากรทางการเเพทย์</Text>
      </View>
    </Shadow>
  );
};

export default Consult;

const styles = StyleSheet.create({
  shadow: {
    marginTop: 32,
  },
  cardShadow: {
    width: '100%',
  },
  conatiner: {
    padding: 12,
    backgroundColor: Colors.RoyalBlue[100],
    borderRadius: 12,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...Typography.Consult.Medium,
    color: Colors.Badge[100],
    marginLeft: 4,
  },
  text: {
    ...Typography.Consult.Small,
    color: Colors.Badge[100],
    marginTop: 4,
  },
});
