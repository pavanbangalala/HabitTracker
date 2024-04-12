import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';
import SafeAreaWrapper from '../components/SafeAreaWrapper';

const ProgressScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>ProgressScreen</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black_white,
  },
});
