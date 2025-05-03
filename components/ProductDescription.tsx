import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ProductDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A skincare routine personalised just for you! Modify the routine as you see fit or click on a step to learn more.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    marginLeft: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 19,
    letterSpacing: -1,
    color: '#F6F6F5',
    fontFamily: 'Poppins',
  },
});