import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';
import SafeAreaWrapper from '../components/SafeAreaWrapper';

const ProfileScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black_white,
  },
});
