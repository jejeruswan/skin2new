import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const ProductImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d838f381d9af854ede0cff4bb661feff3a87db6f?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de' }}
        style={styles.productImage}
      />
      <View style={styles.scrollBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    paddingLeft: 78,
    paddingRight: 10,
    paddingTop: 32,
    gap: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  productImage: {
    width: 214,
    height: 297,
    maxWidth: '100%',
  },
  scrollBar: {
    borderRadius: 100,
    width: 5,
    height: 141,
    backgroundColor: '#F6F6F5',
  },
});