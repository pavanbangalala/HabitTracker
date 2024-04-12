import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type SafeAreaWrapperProps = {
  children: React.ReactNode;
};

const SafeAreaWrapper = ({children}: SafeAreaWrapperProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
