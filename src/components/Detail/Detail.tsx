/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import Colors from '~/styles/Colors';
import Typography from '~/styles/Typography';

const Detail = () => {
  return (
    <Shadow
      startColor={Colors.Shadow[100]}
      distance={8}
      containerStyle={styles.shadow}
      style={styles.cardShadow}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.topic}>HLA-B for Allopurinol</Text>
          <View style={styles.label}>
            <Text style={styles.labelText}>400284</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={[styles.title, styles.spaceTop]}>ลักษณะทางพันธุกรรม</Text>
        <View style={styles.listItem}>
          <Text style={styles.text}>•</Text>
          <Text style={[styles.text, styles.spaceLeft]}>
            Positive HLA-B*58:01
          </Text>
        </View>
        <Text style={[styles.title, styles.spaceTop]}>
          ลักษณะทางพันธุกรรมที่เป็นไปได้
        </Text>
        <View style={styles.listItem}>
          <Text style={styles.text}>•</Text>
          <Text style={[styles.text, styles.spaceLeft]}>HLA-B*13:01/58:01</Text>
        </View>
        <Text style={[styles.title, styles.spaceTop]}>
          การแปลผลทางเภสัชพันธุศาสตร์
        </Text>
        <View style={styles.listItem}>
          <Text style={styles.text}>•</Text>
          <Text style={[styles.text, styles.spaceLeft]}>
            ตรงกับตัวบ่งชี้ต่อการแพ้ยา Allopurinol ตามฐานข้อมูลใน ปัจจุบัน
          </Text>
        </View>
        <View
          style={{
            ...styles.card,
            marginTop: 16,
            backgroundColor: Colors.AntiFlashWhite[100],
          }}>
          <Text style={styles.title}>ข้อเสนอแนะ</Text>
          <Text style={styles.text}>
            หลีกเลี่ยงการใช้ยา Allopurinol ในผู้ป่วยรายนี้ เนื่องจากผู้ป่วย
            มีความเสี่ยงในการเกิดอาการแก้ยาทางผิวหนังชนิดรุนแรง
            (MPE,SJS,TEN,DRESS)
          </Text>
        </View>
      </View>
    </Shadow>
  );
};

export default Detail;

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
  listItem: {
    marginTop: 16,
    flexDirection: 'row',
  },
  spaceLeft: {
    marginLeft: 8,
  },
  spaceTop: {
    marginTop: 16,
  },
  text: {
    ...Typography.Body.Small,
  },
});
