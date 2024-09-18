/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import FastImage from 'react-native-fast-image';
import Colors from '~/styles/Colors';
import Typography from '~/styles/Typography';
import {widthPX} from '~/utils/responsive';
import UploadImageIcon from '~/assets/image/svg/upload-image-icon.svg';

type ProfileProps = {
  onPress: () => void;
};

const Profile = ({onPress}: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ข้อมูลผู้ใช้</Text>
      <TouchableOpacity onPress={onPress}>
        <Shadow
          startColor={Colors.Shadow[100]}
          distance={24}
          containerStyle={styles.shadow}
          style={styles.cardShadow}>
          <View style={styles.card}>
            <View style={styles.profileImage}>
              <FastImage
                style={styles.profileImage}
                source={require('~/assets/image/png/profile.png')}
                resizeMode={FastImage.resizeMode.cover}
              />
              <UploadImageIcon width={20} height={20} style={styles.upload} />
            </View>
            <View>
              <View style={styles.content}>
                <View style={styles.contentLeft}>
                  <Text style={styles.lable}>ชื่อ - นามสกุล</Text>
                  <Text style={styles.text}>สมรัก นักชก</Text>
                </View>
                <View style={styles.contentRight}>
                  <Text style={styles.lable}>เพศ</Text>
                  <Text style={styles.text}>ชาย</Text>
                </View>
              </View>
              <View
                style={{
                  ...styles.content,
                  marginTop: 4,
                }}>
                <View style={styles.contentLeft}>
                  <Text style={styles.lable}>วันเกิด</Text>
                  <Text style={styles.text}>01/12/2515</Text>
                </View>
                <View style={styles.contentRight}>
                  <Text style={styles.lable}>อายุ</Text>
                  <Text style={styles.text}>52 ปี</Text>
                </View>
              </View>
            </View>
          </View>
        </Shadow>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background[100],
  },
  title: {
    ...Typography.Title.Large,
  },
  shadow: {
    marginTop: 16,
  },
  cardShadow: {
    width: '100%',
  },
  card: {
    padding: 16,
    flexDirection: 'row',
    borderRadius: 16,
    borderColor: Colors.Background[100],
    borderWidth: 1,
  },
  profileImage: {
    width: widthPX(80, 375),
    height: widthPX(80, 375),
  },
  upload: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  content: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  contentLeft: {
    width: widthPX(130, 375),
  },
  contentRight: {
    width: widthPX(81, 375),
    marginLeft: 4,
  },
  lable: {
    ...Typography.Body.Small,
  },
  text: {
    ...Typography.Title.Small,
  },
});
