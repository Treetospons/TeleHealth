import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import Colors from '~/styles/Colors';
import Typography from '~/styles/Typography';
import ChevronUpIcon from '~/assets/image/svg/chevron-up-icon.svg';

const Information = () => {
  return (
    <Shadow
      startColor={Colors.Shadow[100]}
      distance={8}
      containerStyle={styles.shadow}
      style={styles.cardShadow}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.topic}>ข้อมูลรักษาเพิ่มเติม</Text>
          <ChevronUpIcon width={24} height={24} />
        </View>
        <View style={styles.line} />
        <Text style={[styles.text, styles.spaceTop]}>
          นอกจาการผลการตรวจยีน HLA-B ยังพบตัวบ่งชี้ต่อการแพ้ยา ตามฐาน
          ข้อมูลในปัจจุบันอีก 1 อัลลีลคือ HLA-B*13:01 ซึ่งมีความสัมพันธ์กับการ
          เกิดผื่นแพ้ยาทางผิวหนังชนิดรุนแรง (SJS,TEN,DRESS) จากยา Dapsone และ
          DRESS จากยา Co-trimoxazole ดังนั้นหากผู้ป่วยไม่เคยใช้ยาชนิดนี้มา
          ก่อนควรหลีกเหลี่ยงการใช้ยา Dapsone และ Co-trimoxazole
        </Text>
      </View>
    </Shadow>
  );
};

export default Information;

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
  topic: {
    ...Typography.Title.Medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: Colors.RoyalBlue[100],
  },
  labelText: {
    ...Typography.Badge.Small,
    color: Colors.Badge[100],
  },
  line: {
    marginTop: 16,
    borderTopColor: Colors.AmericanSilver[100],
    borderTopWidth: 1,
  },
  title: {
    ...Typography.Title.Small,
  },
  spaceTop: {
    marginTop: 16,
  },
  text: {
    ...Typography.Body.Small,
  },
});
