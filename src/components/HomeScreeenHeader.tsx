import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';

const HomeScreeenHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerGreeting}>
        Hello <Text>Ishaan</Text>
      </Text>
    </View>
  );
};

export default HomeScreeenHeader;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: Colors.Kournikova,
    marginLeft: 1,
    marginRight: 1,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  headerGreeting: {
    fontSize: 20,
    color: Colors.black_white,
  },
});
