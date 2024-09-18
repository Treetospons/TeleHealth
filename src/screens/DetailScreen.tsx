/* eslint-disable react/no-unstable-nested-components */
import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Colors from '~/styles/Colors';
import Detail from '~/components/Detail/Detail';
import Information from '~/components/Detail/Information';
import Consult from '~/components/Detail/Consult';
import FastImage from 'react-native-fast-image';
import Header from '~/components/Header/Header';
import {RootStackParams} from '~/types/navigations/RootStackParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, 'Detail'>;

const DetailScreen = ({navigation}: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header onBack={onHandleBack} />,
    });

    const onHandleBack = () => {
      navigation.goBack();
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <Detail />
          <Information />
          <Consult />
        </View>
        <FastImage
          style={styles.promotion}
          source={require('~/assets/image/png/promotion.png')}
          resizeMode={FastImage.resizeMode.cover}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.Background[100],
  },
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  space: {
    marginTop: 32,
  },
  promotion: {
    width: '100%',
    height: 114,
  },
});
