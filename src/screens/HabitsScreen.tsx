import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';
import SafeAreaWrapper from '../components/SafeAreaWrapper';

const HabitsScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>HabitsScreen</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default HabitsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black_white,
  },
});
