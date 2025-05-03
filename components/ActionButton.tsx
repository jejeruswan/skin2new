import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const ActionButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add to routine</Text>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7593be441ade01314249b5434fce8108f0fd7d89?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de' }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    paddingHorizontal: 15,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 87,
  },
  text: {
    fontSize: 24,
    color: '#6B7698',
    fontWeight: '500',
    letterSpacing: -0.3,
    fontFamily: 'Poppins',
  },
  icon: {
    width: 33,
    height: 33,
  },
});