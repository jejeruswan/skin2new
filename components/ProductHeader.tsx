import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const ProductHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c45bd1058c8201f8982a409a2d52d0eb364af46b?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de' }}
        style={styles.logo}
      />
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/173db83434f719703ccdde14ea0bcf1bf148a7c3?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de' }}
        style={styles.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 252,
    maxWidth: '100%',
    alignItems: 'stretch',
    gap: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    width: 56,
    height: 56,
    alignSelf: 'center',
  },
  navigation: {
    width: 130,
    height: 73,
  },
});