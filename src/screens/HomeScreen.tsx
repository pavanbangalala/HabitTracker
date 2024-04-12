import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import HomeScreeenHeader from '../components/HomeScreeenHeader';

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <HomeScreeenHeader />
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black_white,
  },
});
