import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import Health from '~/components/Health/Health';
import Personnel from '~/components/Health/Personnel';
import Profile from '~/components/Health/Profile';
import Colors from '~/styles/Colors';
import {RootStackParams} from '~/types/navigations/RootStackParams';

type Props = NativeStackScreenProps<RootStackParams, 'Profile'>;

const ProfileScreen = ({navigation}: Props) => {
  const handleToDetail = () => {
    navigation.navigate('Detail');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        backgroundColor={Colors.Background[100]}
        barStyle={'dark-content'}
      />
      <ScrollView>
        <View style={styles.container}>
          <Profile onPress={handleToDetail} />
          <Health containerStyle={styles.space} />
          <Personnel containerStyle={styles.space} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.Background[100],
  },
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 36,
  },
  space: {
    marginTop: 32,
  },
});
