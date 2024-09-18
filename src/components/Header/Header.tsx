import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import Colors from '~/styles/Colors';
import Typography from '~/styles/Typography';
import BackIcon from '~/assets/image/svg/back-icon.svg';
import PaperIcon from '~/assets/image/svg/paper-icon.svg';

type HeaderProps = {
  onBack?: () => void;
  onMenu?: () => void;
};

const Header = ({onBack, onMenu}: HeaderProps) => {
  return (
    <Shadow
      startColor={Colors.Shadow[100]}
      distance={24}
      containerStyle={styles.shadow}
      style={styles.cardShadow}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.Background[100]}
          barStyle={'dark-content'}
        />
        <TouchableOpacity onPress={onBack}>
          <BackIcon width={48} height={48} />
        </TouchableOpacity>
        <Text style={styles.title}>เภสัชพันธุศาสตร์</Text>
        <TouchableOpacity onPress={onMenu}>
          <PaperIcon width={48} height={48} />
        </TouchableOpacity>
      </SafeAreaView>
    </Shadow>
  );
};

export default Header;

const styles = StyleSheet.create({
  shadow: {
    marginTop: 0,
  },
  cardShadow: {
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.Background[100],
    borderBottomColor: Colors.Background[100],
    borderBottomWidth: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    ...Typography.Title.Medium,
  },
});
